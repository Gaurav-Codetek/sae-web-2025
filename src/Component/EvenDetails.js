import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Circle,
  Heart,
  ChevronRight,
  MapPinHouse,
  Calendar,
  Share2,
  UsersRound,
  Clock11,
  Box,
} from "lucide-react";

const eventDetails = {
  2: {
    name: "Line Follower",
    location: "UIET Chandigarh",
    startDate: "20 Feb 2025",
    endDate: "",
    entry: "₹ 299",
    prize: "₹ 4000",
    team: "2 - 5 Members",
    link: "https://forms.gle/TBnJhcQBVLhn7CNZ9",
    objective:
      "Teams have to build an autonomous robot which can follow a black line and keep track of directions while going through the maze. The bot has to analyse the path in the dry run and has to go through the maze from the starting point to the ending point in minimum possible time.",
    stages: [],
    COMPETITIONFORMAT: [
      "The game field consists of an arena having dimensions 230 cm X 230 cm (lxb). It consists of the following:",
      "The arena is composed of random paths made up of Black strips.",
      "All the distances are shown in fig. 1 and fig. 2.",
      "The track may contain crossed, curved, or discontinuous black lines.",
      "The width of all black stripes will be 18mm.",
      "The figure below shows the sample arena. The actual arena at the competition will consist of alterations in the path.",
      "A black box of 400 mm x 400 mm is present at the end zone of the arena to indicate the end position.",
    ],
    botspecification: [
      "The autonomous bot must fit into the box of dimensions 220 X 220 X 220 all in mm (lxbxh).",
      "Bot must be started by only one switch. However, a team may have an onboard switch.",
      "Bot must have a red LED that will glow once it reaches the end zone of the arena.",
      "During the run, the autonomous bot must not damage the arena in any way. It is not allowed to leave anything behind or make any marks while traversing the arena. Any bot found damaging the arena will be immediately disqualified. The final decision is at the discretion of the organisers.",
      "Bot must have an ‘on board’ power supply.",
      "When using the electric power supply, the potential difference between any 2 points must not exceed 24 V at any point of time during the game.",
      "The autonomous bot should not separate or split into two or more units. All bots/units which are touching each other or are in the starting point will be considered as one bot.",
      "The Machine cannot be constructed using ready-made ‘Lego kits’ or any ready-made mechanism. But they can make use of readymade gear assemblies. Violating this clause will lead to the disqualification of the team.",
      "The robot must be autonomous. No wireless communication between  bot and operator will be allowed.",
    ],
    competitionRules: [
      "Teams will be given 1 minute for calibration. If any team is found to alter its code after depositing its bots, then it will be immediately disqualified from the competition. They are, however, allowed to make any other hardware changes.",
      "Only one autonomous bot per team is allowed.",
      "When the bot starts, no team member is allowed to touch the bot or enter the arena.",
      "At the start of the task, the bot will be placed at the starting point. Only 1 team member is allowed to be near the game field while starting the bot.",
      "Run will start only when organisers give the signal.",
      "The starting procedure of the bot should be simple and should not involve giving the bot any manual force or impulse in any direction.",
      "A total of 5 minutes and 30 seconds will be given. The bot has to finish the dry run and main run in that period only.",
    ],
    sampleProblemStatement: [
      " The first part is the “Dry Run.” In this run, the bot must start from the ‘Start’ and find its way to reach the ‘End’ of the arena. The bot has to give a signal by glowing a LED as soon as it senses the black box below it at the end. The bot has to follow an algorithm to find its path to reach ‘End’ and the bot can store the turns in its memory to explore the shortest path during the second part of the journey. There are no restrictions to cover all the checkpoints.",
      "The second part is the “Actual Run.” In this run, the bot has to restart from the ‘Start’ again and finds its way to the ‘End’ through the best possible path by following the path that was stored in the first run. The ‘End Zone’ has a black box of 300mm x 300mm (lxb) that indicates the end of the path for the bot. The timer will be set to zero as the “Actual Run” begins.",
      "A total of 3 minutes will be provided to complete the dry run.",
      "A total of 2 minutes and 30 seconds will be provided to complete the actual run. If the bot takes more than 3 minutes to complete the dry run, then the extra time taken will be deducted from the timing of the actual run, which is 2 minutes and 30 seconds.",
      "If the bot takes more than 3 minutes for completing the dry run, then the extra time taken will be deducted from the timing of the actual run which is 2 minutes and 30 Seconds.",
    ],
    generalrules: [
      "Only 1 member of the team is allowed to handle the bot.",
      "Participants are not allowed to keep anything inside the arena other than the bot.",
      "Laptops/personal computers are not allowed near the arena. Other Wi-Fi, Bluetooth, etc. devices must be switched off. The organisers hold the right to check for these devices and their usage and disqualify the team.",
      "The time measured by the organisers will be final and will be used for scoring the teams.",
      "Time measured by any contestant by any other means is not acceptable for scoring.",
      "In case of any disputes/discrepancies, the organisers’ decision will be final and binding.",
      "The organisers reserve the right to change any or all of the above rules as they deem fit. Change in rules, if any, will be highlighted on the website and notified to the registered teams.",
      "Only one team is allowed to be present during the run, other teams will have to stay outside the hall. No team is allowed to take photographs or record their run.",
    ],
    judging: [
      "25 points will be awarded as it crosses any of the checkpoints but it will be counted  only once for each checkpoint.",
      "30 points will be provided if the bot successfully completes the Dry Run.",
      "30 points will be awarded if bot goes through the Shortest Path in Actual Run.",
      "5 points will be awarded if the bot glows the LED.",
    ],
    markingScheme: [
      "A = 25 points * (Number of checkpoints covered during the Dry Run)",
      "B = 30 points if the bot successfully completes the Dry Run",
      "C = 180 - Total time taken in seconds in completing the Dry Run",
      "S = 30 Points if Bot successfully completes through the Shortest Path",
      "T = 150 - Total time taken to complete the Actual Run (only if the bot completes in Shortest Path)",
      "L = 5 points if the LED glows",
      "P = Penalties",
    ],
    importantNote: [
      "Organizer shall have final authority over the interpretation and application of all Rules and decisions. Decisions by organisers in regards to the interpretation and application of the Rules, the Tournament and the Program shall be final and not subject to challenge or appeal.",
      "These Design Rules may change at any time will be highlighted on the website and notified to the registered teams.. You acknowledge and agree that it is your responsibility to read, understand, and comply with any and all rules provided herein. It is strongly encouraged that you check these Design Rules often for any changes that may affect your design, build, and/or ability to compete in the Tournament. Organizers reserves the right to remove any Team from the Tournament at any time for any reason (including, without limitation, failure to meet safety and/or technical requirements) in its sole and absolute.",
    ],
    facility: [],
  },
  3: {
    name: "CAD Design Showdown",
    location: "UIET Chandigarh",
    startDate: "21 Feb 2025",
    endDate: "",
    entry: "₹ 49",
    prize: "₹ 2000",
    team: "Solo Participation",
    link: "https://forms.gle/HN5roCVksyfAsBAL7",
    objective:
      "Analyze, reverse engineer, and design the 2 given objects of everyday use around you in any CAD software. You are allowed to use all the existing features of the software, and use plug-ins, if necessary, to provide the assembly and working of the design. This should be as accurate /realistic as possible.",
    stages: [
      {
        date: "TBD",
        name: "Round 1: STILL OBJECT",
        details:
          "The participants will be given a still object, for example a bottle with sample measurements provided. The participant must design a 3D model.",
      },
      {
        date: "TBD",
        name: "Round 2: MOVABLE ASSEMBLY",
        details:
          "The basic design of a Slider Crank Mechanism has been provided. Model accordingly and assume all necessary and unstated dimensions.",
      },
      {
        date: "TBD",
        name: "Round 3: Animation & Presentation",
        details:
          "Create a short animation showcasing your product's functionality and present your design choices and considerations.",
      },
    ],
    generalrules: [],
    botspecification: [],
    COMPETITIONFORMAT: [
      "The competition requires the participants to design the objects. The participants will have to submit a report and the CAD file. This event runs for 3 hours. The problem statement will be released at around 15 min after the designated time. Then the participant will be required to do 1st and 2nd  questions.",
    ],
    competitionRules: [
      "Plagiarism will be penalized.",
      "Behavior with the organizer and other participants can impact on the marking.",
      "Everyone must reach the designated time or else organizers will have no responsibility for their entry.",
      "Participants are free to choose any commercially available CAD software for this competition.",
      "Standard engineering practices and principles should be followed in the design process.",
      "Participants are encouraged to consider factors like material selection, manufacturability, and safety in their designs.",
    ],
    sampleProblemStatement: [
      "Design a daily use Bottle.",
      "Model a simple Slider Crank Mechanism.",
    ],
    judging: [],
    markingScheme: [
      "Points will be calculated out of a total of 100 points.",
      "The 2nd question (Mechanism) carries more points than the 1st (Daily use Object).",
      "3D model of the two objects carries x+y = z points in total.",
      "Animations of the working mechanisms carry a+b = c points in total (e.g., Bottle cap opening/closing and Slider movement).",
      "Extra features carry u+v = w points (e.g., Label for Bottle, Dimensional Accuracy).",
      "Similarity of the design created with the photograph of the real-life object shall be a contributing factor.",
      "Late submissions carry penalties. The decision rests upon the judges and administrators.",
    ],
    importantNote: [
      "Any decision made by the judges will be final. However, participants can contact the event head if they feel that the judgment is not accurate. But please note that this does not guarantee that the decision will be reversed.",
      "WhatsApp group has been made for all participants.",
      "Assume all necessary and unstated dimensions. Try making the design symmetrical.",
    ],
    facility: [],
  },
  1: {
    name: "Aqua Venture",
    location: "UIET Chandigarh",
    startDate: "19 Feb 2025",
    endDate: "",
    entry: "₹ 199",
    prize: "₹ 3000",
    team: "3 - 5 Members",
    link: "https://forms.gle/1sT4HYqwCBf4XE4z9",
    objective:
      "To design and fabricate a water-based rocket that will be propelled using water pressure solely and capable of achieving the maximum vertical height. The water rocket must rely completely on water pressure as a propellant.",
    stages: [],
    generalrules: [],
    botspecification: [],
    COMPETITIONFORMAT: [],
    competitionRules: [
      "Competition Rounds: There will be total of two competing rounds. Out of which the best out of two will be considered.",
      "The team must design their own water rocket and launch pads with safety.Commercial water rocket kits and launch pads won’t be allowed.",
      "Water rocket must be sturdy enough to bear the pressure created inside the rocket to ensure the safety of participants and judges.",
      "Material Type: The rocket shall be made of low-density materials such as paper, plastic, duct tape, and glue. Use of Metal, ceramics, and other highdensity materials are prohibited.",
      "Body: The water-fuel tank must be a plastic soda-bottle, not a water bottle, with a maximum size of 2.5 liters. The bottle should be strong, light- weight, and designed to be pressurized.",
      "The water rocket must be in the single piece of soda water bottle.",
      "Team must bring their own launch pad.",
      "Time of flight = time of ascent + time of descent.",
      "Recovery System: Teams can use the recovery system attached with the water rocket to increase the time of flight",
      "Teams with recovery system will get the more advantage over those who don’t have this.",
    ],
    sampleProblemStatement: [],
    judging: [
      "Designing of the rocket.",
      "The pressure inside the water rocket will be examined during the launch, the pressure will be in the range of 60-80 psi, before the ejection.",
      "Time of flight.",
    ],
    disqualify: [
      "Rocket should remain intact during the entire time of flight and any detachments from the water rocket will not be considered.",
      "Not more than three members are allowed during launching",
    ],
    markingScheme: [],
    importantNote: [
      "Only cold water air pressure fuel mixture (No hot water etc allowed).",
      "It’s necessary to use only water and air pressure as propellent.Teams can not use any other combination and additives like soda, mintcoke, carbonates or bicarbonates are strictly prohibited.",
      "These Rule change at any time will be highlighted on the website and notified to the registered teams.. You acknowledge and agree that it is your responsibility to read, understand, and comply with any and all rules provided herein.",
      "If two or more teams achieve the same time of flight (measured from launch to when the Water rocket touches the ground), the team with longest time of flight in tie-breaker round will be declared as the winner.",
      "It is strongly encouraged that you check these Rules often for any changes that may affect your design, build, and/or ability to compete in the Tournament.",
      "Organizers reserves the right to remove any Team from the Tournament at any time for any reason (including, without limitation, failure to meet safety and/or technical requirements) in its sole and absolute.",
      "Organizer shall have final authority over the interpretation and application of all Rules and decisions. Decisions by organizers in regards to the interpretation and application of the Rules, the Tournament and the Program shall be final and not subject to challenge or appeal",
    ],
    facility: [],
  },
  4: {
    name: "FOSS Hack",
    location: "UIET Chandigarh",
    startDate: "22 Feb 2025",
    endDate: "",
    entry: "Free",
    prize: "₹ 10 lakhs",
    team: "3 - 5 Members",
    link: "https://fossunited.org/hack/fosshack25",
    objective:
      "Pclub UIET in collaboration with FOSS United presents FOSS Hack 2025 – the ultimate hackathon to unleash your potential and bring your ideas to life.",
    stages: [],
    generalrules: [],
    botspecification: [],
    COMPETITIONFORMAT: [],
    competitionRules: [],
    sampleProblemStatement: [
      "24 Hours Offline (Chandigarh – Limited Seats)",
      "36 Hours Online (Unlimited Participation)",
    ],
    judging: [],
    disqualify: [],
    markingScheme: [],
    importantNote: [],
    facility: [],
  },
  5: {
    name: "Quiz Show",
    location: "UIET Chandigarh",
    startDate: "19-22 Feb 2025",
    endDate: "",
    entry: "₹ 100",
    prize: "₹ 3000",
    team: "2 - 4 Members",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdWTlpdN_vwBZOr8Ric2ZrLFXfh5A9VGhWrNpZww_R0H8OD_A/viewform",
    objective:
      "The Technical Quiz Game Show, is an exhilarating challenge designed to test participants' technical knowledge in a dynamic game-show-inspired format. This event aims to engage students in an interactive and competitive environment while fostering a spirit of learning and teamwork.",
    stages: [],
    generalrules: [],
    botspecification: [],
    COMPETITIONFORMAT: [
      "The quiz will follow a game-show-inspired format.",
      "Participants will compete in two unique quiz rounds.",
      "Use of the internet or any external resources is strictly prohibited.",
    ],
    competitionRules: [],
    sampleProblemStatement: [],
    judging: [],
    disqualify: [],
    markingScheme: [],
    importantNote: [
      "The Programming Club UIET reserves the right to disqualify any team that violates the event rules.",
      "The decision of the event organizers will be final and binding.",
    ],
    facility: [],
  },
  6: {
    name: "FIFA Competition",
    location: "UIET Chandigarh",
    startDate: "19 Feb 2025",
    endDate: "",
    entry: "₹ 100",
    prize: "₹ 5000",
    team: "Solo | Duo",
    link: "https://forms.gle/1kNca6XKVnCr1QkQA",
    objective:
      "Compete against the best and showcase your FIFA skills to dominate the leaderboard and win exciting rewards!",
    stages: [],
    generalrules: [],
    botspecification: [],
    COMPETITIONFORMAT: [
      "Knockout-style competition, 1v1 matches or 2v2 matches.",
      "Each match will be played with two 5-minute halves.",
      "Extra time and penalty shootouts in case of a draw.",
    ],
    competitionRules: [],
    sampleProblemStatement: [
      "Teams: Choose your favorite team from the FIFA roster.",
      "Use your preferred control device (joystick, keyboard, etc.)",
    ],
    judging: [],
    disqualify: [],
    markingScheme: [],
    importantNote: [
      "No external help allowed.",
      "Sportsmanship is a must—disrespectful behavior will lead to disqualification.",
    ],
    facility: [],
  },
  7: {
    name: "Technovate 24 Hour Hackathon",
    location: "UIET Chandigarh",
    startDate: "19 Feb 2025",
    endDate: "",
    entry: "₹ 300",
    prize: "₹ 20k",
    team: "2 - 5 Members",
    link: "https://forms.gle/ot2d4qqVpMp2e1Fx7",
    objective:
      "UIET Chandigarh presents TECHNOVATE’25, a thrilling 24-hour hackathon powered by the GDGC Club! This year’s theme, Space and Cosmos, challenges you to innovate and code solutions inspired by the vastness of the universe. Get ready to push the boundaries of your imagination!",
    stages: [],
    generalrules: [],
    botspecification: [],
    COMPETITIONFORMAT: [
      "Problem Statements will be based on these tracks:",
      "🔗 Blockchain",
      "🤖 Artificial Intelligence & Machine Learning",
      "🌐 Web Development",
      "Problem statements will be released on the day of hackathon.",
    ],
    competitionRules: [
      "Teams will have 24 hours to develop and present their solutions during the onsite hackathon. All participants must be present at UIET by 10:00 AM on Feb 19th, 2025.",
      "Submitted ideas must be the original work of the team members. Plagiarism is strictly prohibited. Internet research is permitted",
      "Only the team leader will submit the final solution, which must include a PPT presentation and a link to a GitHub repository containing the code.",
    ],
    sampleProblemStatement: [],
    judging: [
      "There will be a continuous evaluation of the solution by the mentors present.",
      "Technical soundness of the presentation would be valued. Marks would be given at each of the 3 round and cumulative of these would contribute the final result.",
      "Specific Criteria: (i) Technical Complexity (ii) Creativity (iii) Potential Impact (iv) Execution (v) Presentation",
      "The judges’s decision will stand as the final and conclusive decision.",
    ],
    disqualify: [],
    markingScheme: [],
    importantNote: [],
    facility: [
      "Mattress would be provided for resting purposes",
      "Facilities for Developing and designing thee project",
      "Food Coupons can be purchased",
    ],
  },
};

export default function EventDetailsPage() {
  const date1 = new Date("2025-02-18");
  const date2 = new Date();

  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  console.log(diffDays);
  const date = useRef(diffDays);
  const { eventId } = useParams();
  const event = eventDetails[eventId];

  // if (!event) {
  //   return <div className="text-center text-red-500">Event not found</div>;
  // }
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex gap-[6%] bg-black text-white overflow-hidden relative z-0 py-8 px-4 md:px-12 lg:px-24">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>
      <div className="md:w-[65%] sm:w-[99%] sm:px-[16px] sm:py-[3px]">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 rounded-lg shadow-md mb-10">
          <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
          <p className="text-lg relative flex items-center gap-2">
            <MapPinHouse size={20} />
            {event.location}
          </p>
          <p className="text-md mt-2 relative flex items-center gap-2">
            <Calendar size={20} /> {event.startDate}
          </p>
        </div>
        {/* for smaller screen details cards*/}
        <div className="md:hidden bg-gray-900 p-6  rounded-lg h-[26em] shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
          <div className="flex sm:flex-row items-center sm:justify-between gap-4">
            <h2 className="text-2xl font-semibold mb-4">{event.entry}</h2>
            {/* <div className="flex items-center justify-center gap-[6%] m-0 -mt-3 sm:gap-4 sm:-mt-2">
              <Heart size={20} />
              <Calendar size={20} /> <Share2 size={20} />
            </div> */}
          </div>
          <button
            onClick={() => window.open(event.link, "_blank")}
            className="group relative w-full px-8 py-4 bg-blue-500 rounded-lg overflow-hidden hover:bg-blue-600 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">
              Register <ChevronRight size={20} />
            </span>
          </button>
          <div className="mt-4 space-y-2">
            {/* <p className="relative flex items-center items-center gap-2">
              <UsersRound size={20} /><span className="flex flex-col"><strong>Registered:</strong> 7</span>
            </p> */}
            <p className="relative flex items-center items-center gap-2">
              <UsersRound size={20} />
              <span className="flex flex-col">
                <strong>Team Size:</strong> {event.team}
              </span>
            </p>
            {/* <p className="relative flex items-center items-center gap-2">
              <Clock11 size={20} /><span className="flex flex-col"><strong>Impressions:</strong> 7,310</span>
            </p> */}
            <p className="relative flex items-center items-center gap-2">
              <Clock11 size={20} />
              <span className="flex flex-col">
                <strong>Registration Deadline:</strong> {date.current} days left
              </span>
            </p>
            <p className="relative flex items-center items-center gap-2">
              <Box size={20} />
              <span className="flex flex-col">
                <strong>Prize pool:</strong> {event.prize}
              </span>
            </p>
          </div>
        </div>
        {/* details navbar  */}

        {/* Short description */}
        <div className="mb-10 mb-10 bg-gray-900 p-8 rounded-lg shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            Objective
          </h2>
          <p>{event.objective}</p>
        </div>
        {/* Stages and Timelines */}
        {event.stages.length != 0 ? (
          <div className="mb-10 mb-10 bg-gray-900 p-8 rounded-lg shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">
              Stages and Timelines
            </h2>
            <div className="relative border-l-4 border-blue-500 space-y-8 pl-6">
              {event.stages.map((stage, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-start border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <div className="absolute -left-14 top-6 w-16 h-16 flex flex-col items-center justify-center bg-blue-500 text-black font-bold rounded-full border border-blue-300 shadow-md text-sm leading-tight text-center hover:shadow-blue-500/50">
                    <span className="text-lg glow-effect">
                      {stage.date.split(" ")[0]}
                    </span>
                    <span className="text-xs glow-effect">
                      {stage.date.split(" ")[1]} {stage.date.split(" ")[2]}
                    </span>
                  </div>
                  {stage.status && (
                    <span className="text-red-500 font-bold">
                      🔴 {stage.status}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mt-2 ml-8 glow-effect">
                    {stage.name}
                  </h3>
                  <p className="text-gray-300 mt-2 ml-8">{stage.details}</p>
                  {stage.subDetails && (
                    <ul className="list-disc list-inside mt-2 text-gray-400 ml-8">
                      {stage.subDetails.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {stage.mandatory && (
                    <p className="mt-2 text-yellow-400 ml-8">
                      Mandatory: {stage.mandatory}
                    </p>
                  )}
                  <div className="text-sm text-gray-400 mt-2 ml-8">
                    <p>Start: {stage.startTime}</p>
                    <p>End: {stage.endTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* event details */}
        <div className="mb-10 bg-gray-900 p-6 rounded-lg shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
          <h2 className="text-xl font-semibold mb-6 text-blue-500">
            All that you need to know about '{event.name}'
          </h2>

          <div className="flex flex-col gap-6">
            {event.botspecification.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  {" "}
                  Bot Specification
                </h3>
                <ul className="list-disc ml-8 space-y-2">
                  {event.botspecification.map((rule, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {event.COMPETITIONFORMAT.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  {" "}
                  Competition Format
                </h3>
                <ul className="list-inside space-y-2">
                  {event.COMPETITIONFORMAT.map((rule, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}

            {event.competitionRules.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Competition Rules
                </h3>
                <ul className="list-disc ml-8 space-y-2">
                  {event.competitionRules.map((rule, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {event.sampleProblemStatement.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Gameplay
                </h3>
                <ul className=" list-disc ml-8 space-y-3">
                  {event.sampleProblemStatement.map((rule, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ) : event.disqualify.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Disqualifying Criteria
                </h3>
                <ul className=" list-disc ml-8 space-y-3">
                  {event.disqualify.map((rule, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {event.judging.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Judging Criteria
                </h3>
                <ul className="list-disc ml-8  space-y-3">
                  {event.judging.map((scheme, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {scheme}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {event.markingScheme.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Marking Scheme
                </h3>
                <ul className="list-disc ml-8  space-y-3">
                  {event.markingScheme.map((scheme, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {scheme}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {event.importantNote.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Important Note
                </h3>
                <ul className="list-disc ml-8 space-y-3">
                  {event.importantNote.map((note, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            {event.facility.length != 0 ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white border border-blue-500 hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Facilities
                </h3>
                <ul className="list-disc ml-8 space-y-3">
                  {event.facility.map((note, index) => (
                    <li key={index} className="text-sm text-gray-300">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="hidden sm:fixed right-[3rem] md:block bg-gray-900 p-6 w-[27%] rounded-lg h-[26em] shadow-lg text-white mb-10 border border-blue-500 shadow-blue-500/50">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-semibold mb-4">{event.entry}</h2>
          {/* <div className="flex items-center justify-center gap-[6%] m-0 -mt-3 sm:gap-4 sm:-mt-2">
            <Heart size={20} />
            <Calendar size={20} /> <Share2 size={20} />
          </div> */}
        </div>
        <button
          onClick={() => window.open(event.link, "_blank")}
          className="group relative w-full px-8 py-4 bg-blue-500 rounded-lg overflow-hidden hover:bg-blue-600 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <span className="relative flex items-center gap-2">
            Register <ChevronRight size={20} />
          </span>
        </button>
        <div className="mt-4 space-y-2">
          {/* <p className="relative flex items-center items-center gap-2">
            <UsersRound size={20} /><span className="flex flex-col"><strong>Registered:</strong> 7</span>
          </p> */}
          <p className="relative flex items-center items-center gap-2">
            <UsersRound size={20} />
            <span className="flex flex-col">
              <strong>Team Size:</strong> {event.team}
            </span>
          </p>
          {/* <p className="relative flex items-center items-center gap-2">
            <Clock11 size={20} /><span className="flex flex-col"><strong>Impressions:</strong> 7,310</span>
          </p> */}
          <p className="relative flex items-center items-center gap-2">
            <Clock11 size={20} />
            <span className="flex flex-col">
              <strong>Registration Deadline:</strong> {date.current} days left
            </span>
          </p>
          <p className="relative flex items-center items-center gap-2">
            <Box size={20} />
            <span className="flex flex-col">
              <strong>Prize pool:</strong> {event.prize}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
