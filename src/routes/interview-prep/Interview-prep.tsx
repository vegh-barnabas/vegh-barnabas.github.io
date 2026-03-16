import 'animate.css';

import styles from './Interview-prep.module.scss';

export default function InterviewPrep() {
  return (
    <>
      <div className={`content animate__animated animate__fadeIn ${styles.container}`}>
        <p>I've been doing interviews in Dublin for 5 months as a jobless expat without any experince in a global market. During this time I've acquired some experience in these interviews and I'd like to share my best resources and some tips and tricks.</p>
        <p>At the point of writing this article, I have 4 years of mixed experience in generic software development and frontend development. Also, I have 4.5 years experience as a practical instructor at ELTE.</p>
        <p>I also mostly applied to large companies who make product for enterprise customers, but I tried to minimize applying to FAANG-like companies because I find them clanky and not so human because of the layout of the companies and also the products they made. Nevertheless, I had a few interviews at Stripe and Microsoft out of curiosity. Also, Stripe sounded like a nice place to work at, and the compensation was insane, so I had to go for it.</p>
        <p>I also know there are countless guides online how to prepare for interviews. Hovewer, I think they are mainly targeted for juniors and seniors. Also, I'll try to talk about stuff which other guides I've found don't necessarily mention or they have a different opinion about it.</p>
        <p>I think these questions are kinda alike to what we have in Budapest, but I believe that these interviews are a bit harder here because of the global market. Nevertheless, it's better to overprepare than to underprepare, and I still suggest reading this page if you are planning to interview in Hungary (not even necessarily in Budapest).</p>

        <h4>Before starting the application process</h4>
        <h5>CV Driven development</h5>
        <p>If you are a junior or medior, try to say yes to as much challenging tasks as possible. Try to see these tasks as potential flex-able points in your future CV. This will make you a better candidate than just a regular one. Also, try to take on additional, out-of-work tasks such as pet projects (which actually are finished and deployed), teaching or committing to open-source projects. Some workplace tasks include helping out in interviewing candidates, training or mentoring trainees and helping out in coding dojos or taking part in Hackathon projects. If your company doesn't offer you these kind of opportunities, well, that sucks. But try to be proactive and ask your manager if there are any tasks like this. Your future employer will appreciate it.</p>
        <p>Keep in mind you don't have to grind these constantly, because they can lead to burnout quick. Try to figure out how can you personally balance burning out and doing these extra stuff. I'm not a basement dweller programming addict top 1% developer, most likely you aren't either, so don't forget to live and not spend all your time with work, but try to include that extra step in some of your days. In this market you can't be too lazy, you have to prove something during interviews.</p>

        <h5>Recruitment Agencies</h5>
        <p>I would not neccessarily recomment recruiting agencies due to my experience, which was complete ghosting and no help even when I went there in person with my CV and dressed formally. I still have not received ANY response from either of them, and I've sent inquiries or my CV to around 10. I guess due to the oversaturation of the market they have enough solid Software Engineer CVs. If you have some niche knowledge and much more experience than me, it might be worth a shot.</p>
        <p>Keep in mind, I'm tailking about the Dublin market here, I've had better experience in Budapest with them - maybe because the market is not so oversaturated.</p>

        <h5>Target your Stack</h5>
        <p>In this market, nobody will hire you to a medior embedded position if you have 4 years frontend experience. I didn't even receive answers from these positions, even when I applied to junior ones. So I'd suggest, if you are happy with your current stack, and have some decent knowledge in it, right now it's not the best time to change that. Go for positions which you are the best suited.</p>

        <h5>Which companies should you apply to, when and how?</h5>
        <p>I think the most important aspect of applying to companies is to apply where you have relevant experience. Because I have experience in enterprise product development at a big company, after I while I just applied to these, because they are more likely to reach out. So do the same if you liked the layout of your previous company because you will have more success.</p>
        <p>Try to apply in hiring season, because I've started applying in late October, and didn't have too many interviews until January. From January, I had much much more invitations for interview rounds. Try to start it in February until around the beginning October if you can. If you can't, it's not a huge deal, but keep in mind that more opportunities are available during the hiring season.</p>
        <p>Filter companies! If it's a most likely failing startup, you can just skip it. If you can't see what are the red flags in job descriptions, just look at more of them. This includes "We don't care about your YOE", using bad language in job descriptions, 20 years old CEOs, dumb AI projects, etc.</p>
        <p>I would advise you to instead of mass applying, apply to ones where you see yourself as a potential candidate, and try to put as much effort in that as possible. Align your CV to the position, make text bold which are relevant or remove parts from it. Write a good, short cover letter. Answer the questions in the application form thoroughly.</p>
        <p>At every evening, look up positions on LinkedIn or Indeed posted in the last 24 hours. If you find a suiting position, look it up on the company website and apply there. Don't easy apply on LinkedIn! Only lazy people do that and they know. I have never received a response from easy applies.</p>
        <p>If you have some ethical issues with some companies, you can just skip them, or use them for practice.</p>

        <h5>LinkedIn and LinkedIn Premium</h5>
        <p>LinkedIn offers a premium plan which is billed each month. This includes some useful and useless features. I've found the direct message function of it to be quite useless. I've sent direct messages for hiring managers for positions, but never received an answer. This might differ in your case and location. The one feature I really liked is to see the statistics who am I competing against. The craziest one I've seen was a Revolut EU Global position, which had more than 1000! applicant under a week (few days if I remember correctly). This is nice to see to get a general idea how many people applied, but don't trust it wholeheartedly. Not all applicants are even eligible for a position, meaning they have zero experience while it requires 4+ years, or they can't get a visa and are in India. For a few dollars a month, Indian and Chinese people hire agencies to mass spam their CVs to these companies, because they have 0.0001% chance to get hired, so it's worth a shot for them, but these completely fucks the LinkedIn statistics up. From few hundred applicants, there might be 15-20 who are worth listening to (and some of them aren't, which HR will filter out during the first round).</p>

        <h4>During the process</h4>
        <h5>How should you make your CV</h5>
        <p>I've read countless resources like books and articles on how to make your CV perfect. After researching this much, and redoing my CV countelss times, I think there isn't a general, perfect CV for all positions. Companies look for different kind of people, so don't take the advice what you don't like, but still try to implement these tips while making your CV because I'll be as objective as possible.</p>
        <ul>
          <li>
            <h6>Try to include examples</h6>
            <p>Writing "I am a proactive, team-player person who is passionate about software development" is worthless. All candidates write that, who wouldn't say this? You have to come up with examples from your career. Did you help a trainee one time? Include it! Did you use a technology a few times, for example Cypress for web-testing? Include that too! Just make sure you research a bit about that technology, so you can say something if they ask about it.</p>
          </li>
          <li>
            <h6>Stick with a commonly-used format</h6>
            <p>Try to find a generic template on reddit or anywhere and edit that. HR will most likely get CVs which are using that format, so it's easier for them to read it in half a minute. You can pimp up the template with some colours, but try to minimize the usage of bold text, and I'd advise you against using <i>Italic</i> text.</p>
          </li>
          <li>
            <h6>Remove unneccessary clutter</h6>
            <p>You don't have to include all 7 Angular updates you have helped with in 7 bullet points. Try to keep things short. Also there is not much point in making your CV 2+ pages long if you have only this much experience. I wouldn't say to keep it just one page, the most places I had interviews with I had applied with a 2 page CV.</p>
          </li>
          <li>
            <h6>Use the generic format</h6>
            <p>Non-bullshit, short summary. Most used languages and tools. Relevant work experience. Education, certs, language knowledge. Some pet projects. That's what you need, not much else in most cases.</p>
          </li>
        </ul>
        <p>I know, making a good CV is not easy, even when you think you made the best CV possible, after a week or two, you might think it's garbage. That's what happened to me approx. 20 times. But keep going, keep editing and researching! But you don't have to overengineer it, if you have an okay amount of interviews from cool companies, I think you don't have to edit it further.</p>
        <p>There are tons and tons of advice which I could give about how you can make a nicer CV. But I would just be repeating other articles which tell you about these things better. Do your own research, tinker with your CV, and keep updating it whenever you have a better idea for the wording or layout.</p>

        <h5>About Cover Letters</h5>
        <p>Oddly, the places I've wrote the worst Cover Letters for places where I got interviews.</p>
        <p>I think that Cover Letters are not so important, and honestly not sending a cover letter at all might be a better choice than just blatantly copy-pasting some 400 character long ChatGPT answer.</p>
        <p>If you would be the HR person, and you would have to go through hundreds of applications, would you spend 10 minutes for reading each cover letter? I wouldn't. But! I would read a really short cover letter.</p>
        <p>So in my opinion, if there is an option to include a cover letter, you can, just keep it short and don't fill it up with a bunch of buzzwords.</p>

        <h4>Some generic advice</h4>
        <h5>Be desperate</h5>
        <p>If you like a company, reach out! Spend time with your applications. If you have any questions during the interview process, ask HR kindly for more information. This vocalizes that you are interested in the position and you consider yourself a serious candidate for it. Also you can have a bit of a head start if you ask about unclear aspects before the rounds.</p>

        <h5>Don't give up</h5>
        <p>I've had an interview rescheduled 6 times. 6 times! But I still attended that. So please don't give up, and say yes to as many things as possible.</p>

        <h5>Don't take a no to your heart</h5>
        <p>Really nice companies will decline you over some nuance during the process. Maybe there is a hiring freeze, or maybe someone is better fitting for the position. They might've filled the role internally, or maybe a referred person seemed to be a nicer fit than you. Maybe you weren't friendly enough, our you wasn't that confident with time and space complexity, or you don't have enough lexical knowledge about a framework which is required. Sometimes you just don't have enough experience required for some technologies for the product you would be developing, and they don't want to take the risk to train you for months. In this case, of course, it's not your fault that they didn't choose you. So don't feel bad, but also recognize that it's possible that you've made a mistake during the process and try to figure out what that mistake was, becuase it's likely they won't give you feedback.</p>

        <h5>Don't expect feedback</h5>
        <p>Companies receive hundreds of applications and do numerous interviews. Don't expect them to give you a custom feedback. You will just receive a generic email and it's fine. Still, try to understand what went wrong and make sure you don't make the same mistake at the next interview for another company.</p>

        <h5>Try to flex as much as possible</h5>
        <p>Try to include examples like I mentioned in the "Try to include examples" part in the "chapter" about CV making. Mention that you've worked with different technologies, worked in different teams, helped the trainee guy (even if it was just one time) and stuff like that.</p>
        
        <h5>Do stuff you don't want to do</h5>
        <p>Have you received an invitation to an interview from a company which sounds not fitting to you? Still attend that interview, because you can practice. They ask for a niche technology which you are kinda unfamiliar with but could be still relevant to later interviews? Try to learn that! Or just go without knowing anything, answer the questions which you already preapared for other interviews, and just skip the stuff you don't need for the opportuinities ahead. Take notes of questions you feel like you should know the answer for about your main technology, and skip the niche technology stuff.</p>
        
        <h5>Don't expect companies to make the first move</h5>
        <p>In todays really competitive market, you can't expect companies to reach out. It should be you who applies, and try to apply as soon as possible. Don't wait for hundreds of candidates to make the move before you because you don't have the motivation to spend 10-20 minutes for applying.</p>

        <h5>Be brave</h5>
        <p>Take chances and try not to be overly stressed about rounds. If you try to remain laid-back in stressful situations such as the interview, your brain will work better, and also the interviewer will notice that this isn't your first situation like this, so you must have at least some experience. If you are really stressed, like I was at the beginning, put yourself in uncomfortable situations, so more more more interviews. At the first interview, you might bomb the whole thing because you are so unfamiliar with this situation. But after a while, you'll get used to it, so don't be scared or sad. Also, you could drink a relaxing tea, take a nice walk, or try meditating.</p>

        <h5>Networking</h5>
        <p>I think networking sounds a bit sociopathic for us "normal" people. By hearing networking, I would instantly think about a Blackrock event in the US filled by desparate, money hungry finance bros where the only point to attend is only to become a fake friend with someone who is powerful enough to help climb the ladder. But you don't have to think about it like this. You can go to meetups, it can be a linux meetup, a c++ meetup, or anything tech related. There you will find kind, friendly, and most likely really nerdy people who you can hang out with for a couple of hours. If you are an expat like me, you don't have much space to get new friends at the beginning, and these places are pretty nice for some socialization. Also, if for example one of them mentions an open source project he or she is working on, you can offer you services to them, helping them with the project. Even if it's not a huge help, you can still include it in your CV which is likely to look nice.</p>

        <h5>Take risks</h5>
        <p>As said before, you must stand out somehow. This can be your experience, which might be in a niche framework, or any work related stuff. But what to do if you feel like you are not standing out to a company this way? Try some risky stuff during the interviews. Include quotes from Terry Davis in the cover letter. Tell the interviewer that you think server-sided javascript is the best invention of the world if there is a question related. Tell them you don't agree with clean code, and fast deployment is much more valuable than quality code (I don't agree with this, this is just an example). What could you lose? You might get a no, so what? If you don't have much interview experience, you will most likely get 30 nos, and 50 companies might not even reply, even if you do everything according to the norm. So you can't lose anything with these. But think of these as last resort, if you can progress in interviews without this, I don't think they are necessary. Don't include them just to sound edgy or clever because as I said, these are kinda risky methods and they might not hire you just because of this.</p>

        <h5>Don't consume fear-mongering</h5>
        <p>Stop watching youtube videos with titles "Computer Science degree is worhtless in 2026". This will only make you feel bad and unmotivated. Instead, practice more the stuff you lack. There is no point in watching 30 videos about how the industry is shit. Well, no shit, it's not the best currently, but you still should keep grinding to get a job if you are passionate about this career. If not, you can just give up, and there will be more positions for people who want to get a job and be a software dev.</p>
        <p>Take time relaxing, and when doing so, try to spend as little time in front of a screen in a dark room as possible. And certanly don't watch these videos because they will just be an obstacle in the long run, you won't get any benefit from them. You can also take rest days where you completely ignore studying, just keep doing it in the long run. A good, nice day with friends of family can make you much more motivated than grinding programming feeling terrible.</p>

        <h4>Interviews</h4>
        <h5>Work together with the interviewer</h5>
        <p>The interviewer is not your enemy, it's possibly your future colleague. Try to work with them, feel free to ask them questions and be kind and respectful to them. Afterall they are people like you.</p>

        <h5>Layout of these interviews</h5>
        <p>Tipically you would have more than 2 rounds of interviews.</p>
        <p>These interviews are the following (not in order):</p>
        <ul>
          <li>
            <p>HR Screening Round</p>
            <p>You will receive basic questions like why do you want to work here, what are the ups and downs of your career, what are your long term goals, name a few examples where you did something great, helped your colleague, etc...</p>
            <p>These are not hard rounds on average if you can communicate well and get along with people, but you still would have to know some of the answers so you don't have to think about it for minutes there, potentially wasting time and being not invited to the next round.</p>
            <p>My advice would be to really get familiar with "yourself". By that I mean know your CV, be aware of your previous tasks, know some great stuff you made and proud of, and know some lame mistakes you've made during your working years.</p>
            <p>In my opinion, you should check out at least 15 questions what could be asked here and know the answer generally. You don't have to learn them word-by-word, just know your answers more or less.</p>
            <p>I think this was the easiest for me to learn, but I still had to study for this too, and I advise you the same!</p>
            <p>You would think answers are obvious, but try to answers these questions outside of an interview, and you will realise that these are not easy to answer in each case.</p>
            <p>You can check out these videos which I've found useful to get a better grasp at what you can expect in those interviews:</p>
            <ul>
              <li>Video 1</li>
              <li>Video 2</li>
            </ul>
          </li>
          <li>
            <p>Coding round(s)</p>
            <p>You will have at least one coding round, sometimes you will even have 4 rounds depending on the company.</p>
            <p>These can be specific problems to your work. For example, if you are a Frontend Developer like me, you would receive some JavaScript, React or Angular (or any other kind of frontend technology mentioned in the job description) problems you will have to solve.</p>
            <p>Try to look up as much as possible, Google is your friend! I'll still include a list of the most common problems I've faced during coding rounds:</p>
            <ul>
              <li>Handling large amount of data</li>
              <li>Fixing minor issues related to the basic aspects of your language</li>
              <li>Handling async data (both in vanilla JS and in frameworks)</li>
            </ul>
          </li>
          <p>It's likely you will have a purely oral round, where they love to asks quirks about the main language they require. This can be both React/Angular and Javascript for us frontend people.</p>
          <p>Try to learn important concepts thoroughly like React Hooks, Angular Services, Hoisting, Event Loops etc...</p>
          <p>Sometimes these rounds are utterely bullshit. They ask dumb quirks in your language which you would never encounter in a normal workday. Don't try to understand the point of these questions. They are plainly there to fuck with you. In my experience, mostly bad companies do this who can't figure out that there are much better ways to measure competency.</p>
          <p>You can prepare for these rounds with this tool for example: <a href="https://www.javascript-interview-hell.com/" target="_blank" rel="noreferrer">javascript-interview-hell.com</a>
          </p>
          <p>I think you don't have to spend a lot of time with these, because as I said, a good company won't ask too much of this. Your brain capacity is limited, and try to fill it with more important stuff, like algorithms and concepts of your language.</p>
          <p>You will likely have some algorithmic questions. These are pretty feared amongst normally skilled, non-basement-dweller developers. But you don't have to fear them once you learn these, and they actually can come pretty handy in your day-to-day developer job, and they can improve your competency greatly.</p>
          <p>I've prepared with a tool called <a href="https://structy.net/" target="blank" rel="noreferrer">Structy</a>, which you have to pay for. It has regional pricing, so it's more affordable, hovewer still a bit expensive.</p>
          <p>Think of these problems you'll have to solve to prepare as logical games like Sudoku or Mahjong. If you get familiar with them, they can be honestly kinda fun after a point. So it's not so bad afterall. But you WILL have to spend time with these.</p>
          <p>There is a chance they won't straight up ask you to work with binary trees or linked lists on interviews if you are a Frontend Dev, but it's still better to <b>overprepare instead of underprepare</b>. Also, you still want to know time and space complexity of the code you make. I feel like nowadays this is essential and make you a much better candidate than the rest.</p>
          <p>A nicely structured coding round is well shown <a href="https://www.youtube.com/watch?v=Ti5vfu9arXQ" target="_blank" rel="noreferrer">In one of Googles videos</a>. Check it out to get a grasp how these rounds look. Of course, the interviewer can be much less helpful depending on the competition or the company.</p>
          <p>Also, the first coding round might be an offline round on a site like LeetCode or any similar which offers this interviewing service. These are generally fairly easy tests, just to filter out people who have no idea how to code. I'm not sure what's the point of these, because if you really wanted to, you could just ask an AI bot to write the whole thing. Maybe it's for filtering people out who are even less experienced to use AI.</p>
          <li>
            <p>Managerial round</p>
            <p>You will likely have to talk with your possible manager, who will ask questions like in the HR round, but a bit more techically relevant.</p>
            <p>Try to make a good impression, sound proactive and ambitious.</p>
            <p>They might ask you to solve a coding problem or something. I only had one of these rounds, so I can't tell you much about these. But as long as you know your coding language well and you show that you would be a nice fit and they could work with you well, I think you are good for these.</p>
          </li>
          <li>
            <p>In-person whiteboard round</p>
            <p>I think these are more common in FAANG, or FAANG-like companies, so I never had one. You will encounter some algorithmic problems which will be more and more difficult the further you progress in the interview process. Because I didn't have one of these, it would be the best for you to research this from an other source if you encounter one of these.</p>
          </li>
          <li>System Design round</li>
          <p>At this level these are rare. I had one upcoming, but I've bombed the previous round, so they didn't invite me to it. My knowledge is limited in system design, but I've read it's not too difficult to learn this, so you should check some videos or articles, but I wouldn't spend too much time with this, as I said, I didn't have a single round of this in 5 months. I think it's better off to practice language basics and when you progress in interviews and there is a round like this, just learn this before it.</p>
        </ul>

        <h5>Robotic interviewers</h5>
        <p>You might encounter some biorobot-like interviewers during the process. This might be because you are the 50th one who they have to listen to today. Try to keep up a good mood and don't be an asshole to them. However I found these interviews quite unprofessional, and I didn't succeed in them, still I have tried with my best ability to answer the questions and brighten them up a bit. So try to make a good impression here too, if you can make them smile, they might remember you instead of the other 49 candidates. Also, don't be sad if you don't succeed in these interviews, these are not like a conversation at all, just some kind of exam. I think these are a bit set up to make you fail. The ones where I succeeded were with happy and clever engineers or managers who were open to discuss my ideas, not just wanting an answer or completely skipping questions if you were struggling with them. But sadly most likely you will encounter one of these.</p>

        <h5>Overdress instead of underdress</h5>
        <p>Put on a shirt! You will most likely mainly have online interviews. If the interviewer is in a hoodie, or in a t-shirt, please still put on a shirt. It means you are taking the interview seriously and you want to work there. Also clean your room, or at least the background. Messy rooms can look disadvantegous during an interview, and also your mind likely works better in clean environments.</p>

        <h5>Ask cool questions</h5>
        <p>In todays market you have to stand out of the tons of people competing with you in the interview process. One nice way to stand out is to ask nice questions. These are professional questions about codebases, tech dept, or ask about their opinion about the company. People love talking about themselves (why else would I write this article) and might remember you as a cool guy, even if you didn't really say anything, just ask some stuff about their experience.</p>

        <h4>Last words</h4>
        <p>I think there might be some opposing thoughts in this article, but getting an objective, generic grasp on interviews is hard and I tried to include as many things as possible. I don't think this is the best guide in the world, but for this specific scenario it can be a solid starter. Best of luck for your interviews! And remember, don't give up, practice a lot, keep on doing uncomfortable stuff. It can be days, months, even years I guess, but keep doing it and you will get nice opportunities and in the end a nice job. And during this time, try to find a not too demanding, non tech relevant job if you need, but make sure you have time to prepare for the end goal.</p>
        <p>I'll be honest: When I was writing this article, I had constant PTSD because of the toughness of the market. It will be tough to do this, and you will be burnt out and live through horrors, but as I said numerous times before, don't give up and keep trying.</p>
        <p><b>Also I would warn you!!!</b> that while these tips I've gave are based on my own experiences in Dublin between 2025 October and 2026 March, it's important to remember that the job market varies. What works here at this time might be different a year later, or may look completely different elsewhere, for example in America or Asia. It's worth cross-referencing these suggestions with other sources and adapting them to your own situation and conditions. I would advise you to do your own research as well to your local market.</p>
      </div>
    </>
  );
}
