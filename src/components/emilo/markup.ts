// Page markup for emilo.se. The interactive parts (split-flap board, globe,
// recruiter ticket, copy button) are wired up by public/emilo.js after load.
export const markup = `
<div class="page">
  <header class="topbar">
    <span class="site">emilo.se</span>
    <nav aria-label="Sections"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
  </header>

  <div class="hero">
    <h1 class="vh">Emil Lögdberg</h1>
    <div class="board">
      <div class="name" id="name" aria-hidden="true"></div>
      <p class="boardnote">Computer science and engineering student at Linköping University. Consultant at Gozinto.</p>
      <div class="months" id="months" aria-hidden="true"></div>
      <div class="statusrow">
        <span class="lab">STATUS</span>
        <div class="status" id="status" aria-hidden="true"></div>
      </div>
    </div>
    <div class="under">
      <p class="lede"><strong>I'm free for an internship from June to August 2027.</strong> Next summer I'd like to work on software that gets used.</p>
      <div class="ctl">
        <div class="btns">
          <button id="replay" type="button">Flip again</button>
          <button id="sound" type="button" aria-pressed="false">Sound off</button>
        </div>
      </div>
    </div>
  </div>

  <section id="work">
    <h2>Projects</h2>
    <div class="passes">

      <article class="ticket">
        <div class="main">
          <div class="band"><span>Project pass</span><span>Lögdberg / Emil</span></div>
          <div class="inner">
            <h3>Reporting tool for a startup incubator</h3>
            <div class="route">
              <div class="pt"><span class="code">XLS</span><span class="cap">One Excel workbook, updated by hand</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">APP</span><span class="cap">Web app with a Postgres database</span></div>
            </div>
            <dl class="fields">
              <div><dt>Role</dt><dd>Developer</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Status</dt><dd class="go">In progress</dd></div>
              <div><dt>Through</dt><dd>Gozinto</dd></div>
            </dl>
            <p class="desc">The incubator kept all its company data in one large Excel workbook. I'm building the tool that replaces it. It tracks which stage each of their portfolio companies is in, and they drop in their Excel exports to get finished reports with one click.</p>
          </div>
        </div>
        <div class="stub">
          <svg class="info" viewBox="0 0 320 200" role="img" aria-label="Diagram: Excel exports go into a database that produces reports and tracks which stage each portfolio company is in">
<rect class="s" x="30" y="26" width="52" height="62" rx="5"/><path class="s" d="M30 47h52M30 67h52M56 47v41"/><text x="56" y="104" text-anchor="middle">EXCEL</text>
<path class="s d" d="M92 57h30"/><path class="s" d="M122 52l6 5-6 5"/>
<ellipse class="s" cx="160" cy="36" rx="26" ry="9"/><path class="s" d="M134 36v42c0 5 12 9 26 9s26-4 26-9V36"/><path class="s" d="M134 57c0 5 12 9 26 9s26-4 26-9"/><text x="160" y="104" text-anchor="middle">DATABASE</text>
<path class="s d" d="M196 57h30"/><path class="s" d="M226 52l6 5-6 5"/>
<rect class="s" x="238" y="26" width="52" height="62" rx="5"/><path class="s" d="M251 76V62M264 76V46M277 76V55"/><text x="264" y="104" text-anchor="middle">REPORT</text>
<path class="s thin" d="M40 168h240"/><circle class="ik" cx="40" cy="154" r="3"/><circle class="ik" cx="40" cy="145" r="3"/><circle class="ik" cx="40" cy="136" r="3"/><circle class="ik" cx="40" cy="127" r="3"/><circle class="ik" cx="40" cy="118" r="3"/><circle class="ik" cx="40" cy="168" r="4.5"/><text x="40" y="187" text-anchor="middle">STAGE 1</text><circle class="ik" cx="120" cy="154" r="3"/><circle class="ik" cx="120" cy="145" r="3"/><circle class="ik" cx="120" cy="136" r="3"/><circle class="ik" cx="120" cy="127" r="3"/><circle class="ik" cx="120" cy="168" r="4.5"/><text x="120" y="187" text-anchor="middle">STAGE 2</text><circle class="ik" cx="200" cy="154" r="3"/><circle class="ik" cx="200" cy="145" r="3"/><circle class="ik" cx="200" cy="136" r="3"/><circle class="ik" cx="200" cy="168" r="4.5"/><text x="200" y="187" text-anchor="middle">STAGE 3</text><circle class="ik" cx="280" cy="154" r="3"/><circle class="ik" cx="280" cy="145" r="3"/><circle class="r" cx="280" cy="168" r="4.5"/><text x="280" y="187" text-anchor="middle">STAGE 4</text>
</svg>
          <div class="bar" aria-hidden="true"></div>
          <span class="ref">Client not named</span>
        </div>
      </article>

      <article class="ticket">
        <div class="main">
          <div class="band"><span>Project pass</span><span>Lögdberg / Emil</span></div>
          <div class="inner">
            <h3>Vacation day planner</h3>
            <div class="route">
              <div class="pt"><span class="code">RÖD</span><span class="cap">Swedish red days and klämdagar</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">OFF</span><span class="cap">The longest time off for your vacation days</span></div>
            </div>
            <dl class="fields">
              <div><dt>Role</dt><dd>Idea and code</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Status</dt><dd>Live</dd></div>
              <div><dt>Built with</dt><dd>JavaScript</dd></div>
            </dl>
            <p class="desc">Works out which vacation days give you the longest time off. The board at the top of this page follows the same holiday rules.</p>
          </div>
        </div>
        <div class="stub">
          <img class="shot" src="/img/planner.jpg" alt="The vacation day planner: a year calendar with red days and a side panel listing the best opportunities for time off" width="1200" height="750">
          <div class="bar" aria-hidden="true"></div>
          <a href="https://emilo.se/planner">Open the planner</a>
        </div>
      </article>
      <article class="ticket">
        <div class="main">
          <div class="band"><span>Project pass</span><span>Lögdberg / Emil</span></div>
          <div class="inner">
            <h3>Time Machine</h3>
            <div class="route">
              <div class="pt"><span class="code">DAY</span><span class="cap">A beach scene on a VGA screen</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">NIGHT</span><span class="cap">Turn a knob to speed up or rewind time</span></div>
            </div>
            <dl class="fields">
              <div><dt>Role</dt><dd>Assembler, encoder, instructions, program</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Team</dt><dd>4 students</dd></div>
              <div><dt>Built with</dt><dd>VHDL, Python</dd></div>
            </dl>
            <p class="desc">A microprogrammed processor we built in VHDL on an FPGA board. It draws a beach where the sun and moon rise and set. I wrote the assembler in Python, the logic for the knob and the processor's instructions, and I programmed the Time Machine program that runs on the processor.</p>
          </div>
        </div>
        <div class="stub">
          <img class="shot" src="/img/timemachine.jpg" alt="The Time Machine beach scene on a VGA screen, with a seagull flying over the sea" width="960" height="600">
          <div class="bar" aria-hidden="true"></div>
          <a href="https://github.com/emilog4/Timemachine">View the code</a>
        </div>
      </article>
    </div>
    <div class="passes trio">
      <article class="ticket compact">
        <div class="main">
          <div class="band"><span>Project pass</span><span>Lögdberg / Emil</span></div>
          <div class="inner">
            <h3>Data analysis audit</h3>
            <div class="route">
              <div class="pt"><span class="code">GAPS</span><span class="cap">Data the company's analysis didn't cover</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">CHANGE</span><span class="cap">New ways of working with their strategic data analysis</span></div>
            </div>
            <dl class="fields">
              <div><dt>Role</dt><dd>Consultant</dd></div>
              <div><dt>Client</dt><dd>SEK 4 bn turnover</dd></div>
              <div><dt>Status</dt><dd>Delivered</dd></div>
              <div><dt>Through</dt><dd>Gozinto</dd></div>
            </dl>
            <p class="desc">Along with a team in Gozinto I audited how a large company analysed its data for predicting future markets. We found gaps in what the analysis covered, and as a result the company changed its ways of working about their strategic data analysis.</p>
          </div>
        </div>
        <div class="stub">
          <svg class="info" viewBox="0 0 320 200" role="img" aria-label="Diagram: a grid of analysed data with a few gaps marked, and a magnifying glass over the gaps">
<rect class="ik cell" x="40" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="64" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="88" y="30" width="16" height="16" rx="2"/><rect class="rs" x="112" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="136" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="160" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="184" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="208" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="232" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="256" y="30" width="16" height="16" rx="2"/><rect class="ik cell" x="40" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="64" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="88" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="112" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="136" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="160" y="54" width="16" height="16" rx="2"/><rect class="rs" x="184" y="54" width="16" height="16" rx="2"/><rect class="rs" x="208" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="232" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="256" y="54" width="16" height="16" rx="2"/><rect class="ik cell" x="40" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="64" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="88" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="112" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="136" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="160" y="78" width="16" height="16" rx="2"/><rect class="rs" x="184" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="208" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="232" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="256" y="78" width="16" height="16" rx="2"/><rect class="ik cell" x="40" y="102" width="16" height="16" rx="2"/><rect class="rs" x="64" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="88" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="112" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="136" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="160" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="184" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="208" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="232" y="102" width="16" height="16" rx="2"/><rect class="ik cell" x="256" y="102" width="16" height="16" rx="2"/>
<circle class="s" cx="204" cy="68" r="36"/><path class="s thick" d="M230 94l28 28"/>
<rect class="ik cell" x="40" y="158" width="12" height="12" rx="2"/><text x="60" y="168">ANALYSED</text>
<rect class="rs" x="150" y="158" width="12" height="12" rx="2"/><text x="170" y="168">NOT COVERED</text>
</svg>
          <span class="ref">Client not named</span>
        </div>
      </article>
      <article class="ticket compact">
        <div class="main">
          <div class="band"><span>Project pass</span><span>Lögdberg / Emil</span></div>
          <div class="inner">
            <h3>Onboarding portal</h3>
            <div class="route">
              <div class="pt"><span class="code">NEW</span><span class="cap">A new member who doesn't know the organisation yet</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">READY</span><span class="cap">Knows the organisation and their next steps</span></div>
            </div>
            <dl class="fields">
              <div><dt>Role</dt><dd>Design and build</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Status</dt><dd>In use</dd></div>
              <div><dt>Built with</dt><dd>Lovable</dd></div>
            </dl>
            <p class="desc">A portal where new members of a client organisation learn about the organisation and find out their next steps. The organisation has more than 500 members. A Gozinto project.</p>
          </div>
        </div>
        <div class="stub">
          <svg class="info" viewBox="0 0 320 200" role="img" aria-label="Diagram: a new member learns about the organisation and then sees their next steps">
<text class="big" x="28" y="80">500+</text><text x="31" y="100">MEMBERS IN THE CLIENT ORGANISATION</text>
<path class="s d" d="M52 150h96M172 150h96"/>
<circle class="s" cx="40" cy="150" r="8"/><circle class="s" cx="160" cy="150" r="8"/><circle class="r" cx="280" cy="150" r="8"/>
<text x="40" y="178" text-anchor="middle">NEW MEMBER</text><text x="160" y="178" text-anchor="middle">LEARN</text><text x="280" y="178" text-anchor="middle">NEXT STEPS</text>
</svg>
          <span class="ref">500+ members</span>
        </div>
      </article>

      <article class="ticket compact">
        <div class="main">
          <div class="band"><span>Project pass</span><span>Lögdberg / Emil</span></div>
          <div class="inner">
            <h3>RoboCab</h3>
            <div class="route">
              <div class="pt"><span class="code">A</span><span class="cap">Pickup area</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">B</span><span class="cap">Drop-off, by the shortest route</span></div>
            </div>
            <dl class="fields">
              <div><dt>Role</dt><dd>Image recognition</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Status</dt><dd class="go">In progress</dd></div>
              <div><dt>Team</dt><dd>7 students</dd></div>
            </dl>
            <p class="desc">An autonomous taxi robot we're building at university. It drives itself between pickup areas and collects passengers along the way.</p>
          </div>
        </div>
        <div class="stub">
          <img class="shot" src="/img/robocab.jpg" alt="The RoboCab car: a small four-wheeled robot with a camera on a mast" width="960" height="600">
          <img class="logo" src="/img/robocab-logo.png" alt="RoboCab logo">
        </div>
      </article>

      <article class="ticket compact">
        <div class="main">
          <div class="band"><span>Project pass</span><span>Lögdberg / Emil</span></div>
          <div class="inner">
            <h3>Budapest Spots</h3>
            <div class="route">
              <div class="pt"><span class="code">STO</span><span class="cap">A group of friends in Stockholm</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">BUD</span><span class="cap">Every restaurant and activity on one map</span></div>
            </div>
            <dl class="fields">
              <div><dt>Role</dt><dd>Idea and code</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
              <div><dt>Status</dt><dd>Used on the trip</dd></div>
              <div><dt>Built with</dt><dd>React</dd></div>
            </dl>
            <p class="desc">A site for a trip with friends, with a live map of our list and a points game where we set each other challenges.</p>
          </div>
        </div>
        <div class="stub">
          <img class="shot" src="/img/budapest.jpg" alt="Budapest Spots: a list of places with filters for time of day, vibe and budget" width="960" height="600">
          <a href="https://emilo.se/budapest">Open the site</a>
        </div>
      </article>
    </div>
  </section>

  <section id="experience">
    <h2>Where I've worked</h2>
    <div class="passes">
      <article class="ticket small">
        <div class="main">
          <div class="band"><span>Work pass</span><span>Strategy consultant</span></div>
          <div class="inner">
            <h3>Gozinto Studentkonsulter</h3>
            <div class="route">
              <div class="pt"><span class="code">SEP 2024</span><span class="cap">Joined</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">NOW</span><span class="cap">Still here</span></div>
            </div>
            <p class="desc">Market and competitor research for client companies, and the two web projects above. I also look after part of the bookkeeping and IT tools, and I've led onboarding of new members.</p>
          </div>
        </div>
        <div class="stub"><span class="live">Current</span><div class="bar" aria-hidden="true"></div><span class="ref">Linköping</span></div>
      </article>
      <article class="ticket small">
        <div class="main">
          <div class="band"><span>Work pass</span><span>Advisor</span></div>
          <div class="inner">
            <h3>Apoteket, Mörby Centrum</h3>
            <div class="route">
              <div class="pt"><span class="code">DEC 2022</span><span class="cap">Started</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">AUG 2024</span><span class="cap">Back for summer 2025</span></div>
            </div>
            <p class="desc">Helped customers choose self-care products, ran the register and handled returns and complaints.</p>
          </div>
        </div>
        <div class="stub"><div class="bar" aria-hidden="true"></div><span class="ref">Stockholm</span></div>
      </article>
    </div>
  </section>

  <section id="volunteering">
    <h2>Volunteering</h2>
    <div class="passes">
      <article class="ticket small">
        <div class="main">
          <div class="band"><span>Volunteer pass</span><span>Class representative</span></div>
          <div class="inner">
            <h3>Computer science and engineering programme, Linköping University</h3>
            <div class="route">
              <div class="pt"><span class="code">AUG 2025</span><span class="cap">Started</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">NOW</span><span class="cap">Still going</span></div>
            </div>
            <p class="desc">I represent my class. Twice each semester I hold course evaluations with the course staff and pass on what the students think.</p>
          </div>
        </div>
        <div class="stub"><span class="live">Current</span><div class="bar" aria-hidden="true"></div><span class="ref">2 evaluations per semester</span></div>
      </article>
      <article class="ticket small">
        <div class="main">
          <div class="band"><span>Volunteer pass</span><span>Bar and serving</span></div>
          <div class="inner">
            <h3>VilleValla Pub</h3>
            <div class="route">
              <div class="pt"><span class="code">AUTUMN</span><span class="cap">One term</span></div>
              <span class="way" aria-hidden="true"></span>
              <div class="pt"><span class="code">2024</span><span class="cap">Student pub, Linköping</span></div>
            </div>
            <p class="desc">Worked behind the bar and served customers at the student pub.</p>
          </div>
        </div>
        <div class="stub"><div class="bar" aria-hidden="true"></div><span class="ref">Linköping</span></div>
      </article>
    </div>
  </section>

  <section id="about">
    <h2>About me</h2>
    <div class="idcard">
      <div class="band"><span>Identity card</span><span>Sweden / SWE</span></div>
      <div class="idbody">
        <img class="photo" src="/img/me.jpg" alt="Portrait of Emil Lögdberg" width="420" height="540">
        <dl class="idfields">
          <div><dt>Name</dt><dd>Emil Lögdberg</dd></div>
          <div><dt>Age</dt><dd>22</dd></div>
          <div><dt>From</dt><dd>Stockholm</dd></div>
          <div><dt>Based in</dt><dd>Linköping</dd></div>
          <div class="wide"><dt>Studies</dt><dd>MSc in Computer Science and Engineering, Linköping University, year 3 of 5</dd></div>
          <div class="wide"><dt>Languages</dt><dd>Swedish, English, basic French</dd></div>
          <div class="wide"><dt>Off duty</dt><dd>Cooking, tennis, skiing, travel</dd></div>
        </dl>
      </div>
      <div class="mrz" aria-hidden="true">ID&lt;SWE&lt;LOGDBERG&lt;&lt;EMIL&lt;&lt;&lt;LINKOPING&lt;&lt;&lt;COMPUTER&lt;SCIENCE&lt;&lt;&lt;2029&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
    </div>
    <div class="bio">
      <p>I like taking on new problems and learning new skills, while understanding how the problems and solutions can turn into useful insights. Before university I worked at a pharmacy and at McDonald's, where I learned to explain things to people who aren't technical.</p>
    </div>
    <div class="travel">
      <div class="globewrap">
        <div class="globebox"><canvas id="globe" role="img" aria-label="Globe with the places Emil has been marked in red"></canvas></div>
        <span class="hint">Drag to turn</span>
      </div>
      <div class="trtext">
        <h3>Places I've been</h3>
        <p>I like to travel. <span id="ccount">17</span> countries so far, marked in red. Pick one and the globe turns to it.</p>
        <div class="countries" id="countries"></div>
        <h4 class="sub">Favourite places</h4>
        <ul class="places" id="places"></ul>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Get in touch</h2>
    <p>I'm looking for a summer internship in 2027 in software, AI or tech consulting, in Stockholm or Linköping.</p>
    <form class="issue" id="issue">
      <label for="co">Hiring for next summer? Type your company name and get a ticket.</label>
      <div class="issuerow"><input id="co" type="text" maxlength="28" autocomplete="organization" placeholder="Your company"><button type="submit">Issue ticket</button></div>
    </form>
    <article class="ticket small" id="rt" aria-live="polite">
      <div class="main">
        <div class="band"><span>Internship pass</span><span>Lögdberg / Emil</span></div>
        <div class="inner">
          <h3 id="rt-title">Emil Lögdberg to your company</h3>
          <div class="route">
            <div class="pt"><span class="flapcode" id="rt-from" aria-hidden="true"></span><span class="cap">Linköping University</span></div>
            <span class="way" aria-hidden="true"></span>
            <div class="pt"><span class="flapcode" id="rt-code" aria-hidden="true"></span><span class="cap" id="rt-cap">Your company, summer 2027</span></div>
          </div>
          <dl class="fields">
            <div><dt>Passenger</dt><dd>Emil Lögdberg</dd></div>
            <div><dt>Dates</dt><dd>Jun to Aug 2027</dd></div>
            <div><dt>Working days</dt><dd id="rt-days">65</dd></div>
            <div><dt>Status</dt><dd class="go">Awaiting your reply</dd></div>
          </dl>
          <p class="desc">Valid for one summer internship. To confirm, write to the address below.</p>
        </div>
      </div>
      <div class="stub"><div class="bar" aria-hidden="true"></div><span class="ref">Seat: next to your team</span></div>
    </article>
    <div class="reach"><span class="mail" id="mail">emil.logdberg@gmail.com</span><button id="copy" type="button">Copy address</button></div>
    <div class="reach"><a href="https://www.linkedin.com/in/emil-logdberg/">LinkedIn</a><a href="https://github.com/emilog4">GitHub</a></div>
  </section>

  <footer><span>© 2026 Emil Lögdberg</span><span>Linköping, Sweden</span></footer>
</div>
`;
