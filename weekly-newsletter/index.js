const sass = require("node-sass");
const { renderFile } = require("ejs");
const fs = require("fs-extra");
const { fetchElement, fetchDonationState } = require("./src/fetch_data");
const yaml = require('js-yaml')

async function renderSass(file) {
  return new Promise((res, rej) => {
    sass.render(
      {
        file,
        outputStyle: "compressed"
      },
      function(err, result) {
        if (err) rej(err);
        else res(result);
      }
    );
  });
}

async function main() {
  const input = yaml.load(await fs.readFile('./example_input.yml'))

  const topics = await Promise.all(
    input.topics.map(
      async (topic)=>({
        ...topic,
        elements: await Promise.all(
          topic.elements.map(elem_id => fetchElement(elem_id))
        )
      })
    )
  )

  await fs.ensureDir("dist");
  await fs.emptyDir("dist");
  const stylesheet = (await renderSass("src/styles.scss")).css.toString(
    "utf8"
  );

  const data = {
    title: `DEMOCRACY Sitzungswoche KW${input.kw}`,
    donation_state: await fetchDonationState(),
    topics,
    // internal / not-data-related
    stylesheet: "<style>" + stylesheet + "</style>",
    addNull: number => (number / 10 < 1 ? "0" + String(number) : number)
  };

  await fs.writeFile(
    "dist/result.html",
    await renderFile("src/html.ejs", data)
  );
  await fs.writeFile("dist/result.txt", await renderFile("src/text.ejs", data));
  await fs.writeFile(
    "dist/instant-message.txt",
    await renderFile("src/im.ejs", data)
  );

  await run('./src/generate-header-img.sh', [input.kw])
}

const child = require('child_process')
async function run (command, args, options) {
  return new Promise((resolve, reject) => {
    const p = child.spawn(command, args, options)
    // p.stdout.pipe(process.stdout)
    // p.stderr.pipe(process.stderr)
    p.on('error', reject)
    p.on('exit', (code)=>{
      if (code != 0) {
        p.stderr.pipe(process.stderr)
        console.log(command + 'exited with ERR CODE '+ code)
        reject('ERR CODE '+ code)
      } else {
        resolve()
      }
    })
  })
}

main();
