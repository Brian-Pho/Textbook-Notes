---
layout: post
title: "The Quest for Artificial Intelligence"
date: "2018-08-01"
categories:
- Textbooks
book: "the-quest-for-artificial-intelligence"
book_authors: "Nils J. Nilsson"
excerpt: "A thorough account of the history of AI. An ok book that was too detailed at times."
---

<blockquote class="blockquote">
  <p>Nobody phrases it this way, but I think that artificial intelligence is almost a humanities discipline. It's really an attempt to understand human intelligence and human cognition.</p>
  <p class="blockquote-footer">Sebastian Thrun</p>
</blockquote>

## Part I: Beginnings

### Chapter 1: Dreams and Dreamers

- "For seeing life is but a motion of limbs, the beginning whereof is in some principal part within, why may we not say that all automata have an artificial life? For what is the heart, but a spring; and the nerves, but so many strings; and the joints, but so many wheels, giving motion to the whole body."
    - Thomas Hobbes in *Leviathan*
- The quest for artificial intelligence begins with dreams like these.
- To turn these dreams into reality requires usable clues about how to proceed.

### Chapter 2: Clues

- Clues about what might be needed to make machines intelligent are scattered throughout philosophy, logic, biology, psychology, statistics, and engineering.
- Leibniz attempted to design a language in which all human knowledge could be formulated.
- He speculated that the propositions that constitute knowledge could be built from a smaller number of primitive ones (just as all words can be built from letters in an alphabetic language).
- His lingua characteristica or universal language would consist of these primitive propositions, which would comprise an alphabet for human thoughts.
- The main problem in applying this idea was discovering the components of the primitive "alphabet."
- We would like to mechanize the reasoning process, why?
- Because it's the brain of an animal that is responsible for converting sensory information into action, it's to be expected that several good ideas can be found in the work of people who study brains.
- Other ideas are provided by the work of psychologists who study intelligent behavior.
- And because it's evolutionary processes that have produced intelligent life, those processes too provide important hints about how to proceed.
- The "neuron doctrine" specified that living cells called "neurons" together with their interconnections were fundamental to what the brain does.
- Warren McCulloch and Walter Pitts showed that networks of neurons could perform all possible computational operations.
- The behaviorists argued that psychology should be a science of behavior, not of the mind.
- They rejected the idea of trying to identify internal mental states such as beliefs, intentions, desires, and goals.
- Chomsky claimed that all humans have at birth a "universal grammar" that accounts for much of their ability to learn and use languages.
- He also claimed that "the span of immediate memory seems to be almost independent of the number of bits per chunk."
- That is, it doesn't matter what a chunk represents, be it a single digit in a phone number, a name of a person just mentioned, or a song title; we can apparently only hold seven of them (plus or minus two) in our immediate memory.
- Cognitive science attempted to explicate internal mental processes using ideas such as goals, memory, task queues, and strategies without necessarily trying to ground these processes in neurophysiology.
- Cognitive science and artificial intelligence have been closely related ever since their beginnings.
- Cognitive science has provided clues for AI researchers, and AI has helped cognitive science with newly invented concepts useful for understanding the workings of the mind.
- That living things evolve gives us two more clues about how to build intelligent artifacts.
    - First, the processes of evolution itself might be simulated on computers to produce the machines we dream about.
    - Second, those paths that evolution followed in producing increasingly intelligent animals can be used as a guide for creating increasingly intelligent artifacts.
- That each descendant machine differed little from its parent, whereas any helpful improvement would require a much larger step in the "space" of possible machines.
- Researchers would come to recognize that all of these evolutionary methods were elaborations of a useful mathematical search strategy called "gradient ascent" or "hill climbing."
- Start with a machine that is able to do what an infant can do, then design machines that can mimic the abilities of children at each rung of the ladder.
- It may be that an infant mind is far too complicated to simulate and the processes of its maturation too difficult to follow.
- If the aspect of behavior that is fed back acts to diminish or reverse that aspect, the process is called "negative feedback."
- If, on the other hand, it acts to increase or accentuate that aspect of behavior, it is called "positive feedback."
- That self-organization is not a property of an organism itself but a property of the organism and its environment taken together.
- Although self-organization appears to be important in ideas about how life originated, it's unclear whether or not it provides clues for building intelligent machines.
- Storing the program allows changes in the program to be made easily, but it also allows the program to change itself by changing appropriate parts of the memory where the program is stored.
- The importance of the universal machine is clear. We don't need to have an infinite number of different machines doing different jobs. A single one will suffice.
- The engineering problem of producing various machines for various jobs is replaced by the office work of 'programming' the universal machine to do these jobs.
- Argument from Continuity in the Nervous System: The nervous system is certainly not a discrete-state machine. A small error in the information about the size of a nervous impulse impinging on a neuron may make a large difference to the size of the outgoing impulse.
- It may be argued that one cannot expect to be able to mimic the behavior of the nervous system with a discrete-state system.
- Alan Turing suggested "Instead of trying to produce a programme to simulate the adult mind, why not rather try to produce one which simulates the child's? If this were then subjected to an appropriate course of education one would obtain the adult brain."

## Part II: Early Explorations: 1950s and 1960s

### Chapter 3: Gatherings

- If machines are to become intelligent, they must be able to do the thinking-related things that humans can do.
- The emergence of artificial intelligence as a full-fledged area of research coincided with three important meetings:
    - one in 1955,
    - one in 1956, and
    - one in 1958.
- In 1955, a "Session on Learning Machines" was held in Los Angeles.
- 1955: To "come to the same thing," these two approaches, neural modeling and symbol processing, must be recognized simply as different levels of description of what goes on in the brain. Different levels are appropriate for describing different kinds of mental phenomena.
- In 1956 a "Summer Research Project on Artificial Intelligence" was convened at Dartmouth College.
- 1956: The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.
- The 1956 workshop is considered to be the official beginning of serious work in artificial intelligence, and Minsky, McCarthy, Newell, and Simon came to be regarded as the "fathers" of AI.
- 1958: The proceedings of this conference contains some papers that became quite in influential in the history of artificial intelligence.
- Pandemonium can take the form of a neural network, a hierarchically organized set of symbol processors all working in parallel, or some combination of these forms. If the latter, the model is a provocative proposal for joining these two disparate approaches to AI.
- These are computational processes that "look at" the input data, say an image of a printed letter or number. Each demon looks for something specific in the image, perhaps a horizontal bar; another might look for a vertical bar; another for an arc of a circle; and so on.
- Each demon "shouts" its findings to a set of demons higher in the organization. (Think of these higher level demons as middle-level managers.) The loudness of a demon's shout depends on how certain it's that it's seeing what it's looking for.
- Each of the next level of demons specializes in listening for a particular combination of shouts from the data demons.
- E.g. One of the demons at this level might be tuned to listen for shouts from data demon 3, data demon 11, and data demon 22. If it finds that these particular demons are shouting loudly, it responds with a shout of its own to the demons one level up in the hierarchy, and so on.

### Chapter 4: Pattern Recognition

- Their work benefitted from introspection about how humans solve problems.
- Many of our mental abilities are beyond our power of introspection.
- We don't know how we recognize speech sounds, read cursive script, distinguish a cup from a plate, or identify faces. We just do these things automatically without thinking about them.
- Lacking clues from introspection, early researchers interested in automating some of our perceptual abilities based their work instead on intuitive ideas about how to proceed, on networks of simple models of neurons, and on statistical techniques.
- Pattern recognition refers to the process of analyzing an input image, a segment of speech, an electronic signal, or any other sample of data and classifying it into one of several categories.
- It was termed "series-coupled" because the output of each neural element fed forward to neural elements in a subsequent layer.
- In more recent terminology, the phrase "feed-forward" is used instead of "series-coupled." In contrast, a "cross-coupled" perceptron could have the outputs of neural elements in one layer be inputs to neural elements in the same layer. A "back-coupled" perceptron could have the outputs of neural elements in one layer be inputs to neural elements in lower numbered layers.
- It's an example in which the original image is divided into overlapping subimages, each of which is independently processed.
- Approaches to AI problems involving neural networks and statistical techniques came to be called "nonsymbolic" to contrast them with the "symbol-processing" work being pursued by those interested in proving theorems, playing games, and problem solving.
- These nonsymbolic approaches found application mainly in pattern recognition, speech processing, and computer vision.

### Chapter 5: Early Heuristics Programs

- To constrain what was later called "the combinatorial explosion", Newell and Simon suggested using "heuristics" to generate transformations guessed as likely to be on the path to a solution.
- "It's often argued that a careful line must be drawn between the attempt to accomplish with machines the same tasks that humans perform, and the attempt to simulate the processes humans actually use to accomplish these tasks."
- The program then attempted to reduce this difference by applying some symbol-manipulating "operator" to the initial symbol structure.
- Newell and Simon called this strategy "means ends analysis." (Note the similarity to feedback control systems, which continuously attempt to reduce the difference between a current setting and a desired setting.)
- Do people use subprograms and recursion in their own thinking?
- Possibly, but their ability to recall how to resume what some higher level thought process was doing when that process starts up a chain of lower level processes is certainly limited.

### Chapter 6: Semantic Representations

- Began to employ more complex symbol structures in programs for performing various intellectual tasks. Because of their rich, articulated content of information about their problem topic, these structures were called semantic representations.
- The meaning of a term is represented by its place in the network and how it's connected to other terms.
- This same idea is used in dictionaries where the meaning of a word is given by mentioning the relationship of this word to other words.
- The meanings of those other words are, in turn, given by their relationships to yet other words. So we can think of a dictionary as being like a large semantic network of words linked to other words.
- Quillian's model differs from some later semantic networks in that it does not have a predetermined hierarchy of superclasses and subclasses.
- As Quillian puts it, "every word is the patriarch of its own separate hierarchy when some search process starts with it. Similarly, every word lies at various places down within the hierarchies of (i.e., is an ingredient in) a great many other word concepts, when processing starts with them."
- Like artificial neural networks, information is stored in the links.

### Chapter 7: Natural Language Processing

- Language can be analyzed at several different levels.
- These levels can be arranged into a hierarchy, starting with the most basic components of language (sounds and word parts) and proceeding upward to levels dealing with sentences.
- If speech is being dealt with, there are the levels of phonetics (language sounds) and phonology (organization of sounds into words). For both speech and text, morphology deals with how whole words are put together from smaller parts.
- E.g. The word "walking" consists of "walk" plus "-ing."
- Syntax is concerned with sentence structure and grammar. It attempts to describe rules by which a string of words in a certain language can be labeled either grammatical or not.
- E.g. The string "John hit the ball" is grammatical but the string "ball the hit John" is not.
- Together with the dictionary definitions of words, syntax comes next in importance for understanding the meaning of a sentence.
- E.g. The sentence "John saw the man with a telescope" has two different meanings depending on its syntactic structure (depending on whether "with a telescope" refers to "the man" who had a telescope or to "saw.")
- Grammar alone is insufficient for determining meaning.
- E.g. The sentence "Colorless green ideas sleep furiously" might be considered grammatical, but it's nonsensical.
- The semantics level helps to determine the meaning (or the meaninglessness) of a sentence by employing logical analyses.
- E.g. Through semantic analysis, an "idea" can't be both "colorless" and "green."
- One of the factors leading Bar-Hillel to his negative conclusions was the apparent difficulty of giving computers the "world knowledge" they would need for high-quality translation.

### Chapter 8: 1960s' Infrastructure

- New computer languages made it much easier to build AI systems.
- Researchers from mathematics, cognitive science, linguistics, and what soon would be called "computer science" came together in meetings and in newly formed laboratories to attack the problem of mechanizing intelligent behavior.
- In addition, government agencies and companies, concluding that they had an important stake in this new enterprise, provided needed research support.
- Since their early days, the groups at CMU, MIT, and Stanford have been among the leaders of research in AI.
- Often graduates of one of these institutions became faculty members of one of the other ones.
- McCarthy's view about all of this is that "IBM thought that artificial intelligence was bad for IBM's image. This may have been associated with one of their other image slogans, which was 'data processing, not computing.'"
- AI researchers now had the means to represent knowledge by encoding it in networks, as logical formulas, or in other symbol structures tailored to specific problem areas.
- Furthermore, they had accumulated experience with heuristic search and other techniques for manipulating and using that knowledge.
- Researchers now had new programming languages that made it easier to write symbol-processing programs.
- Complementing all of this symbol-processing technology were neural networks and related statistical approaches to pattern recognition.

## Part III: Efflorescence: Mid-1960s to Mid-1970s

### Chapter 9: Computer Vision

- Most computer vision work is based on processing two-dimensional images gathered from a three-dimensional world.
- Different three-dimensional scenes might produce the same two-dimensional image.
- The problem of reconstructing the scene faithfully from an image is impossible in principle.
- They seem to be able to interpret the two-dimensional images formed on their retinas in a way that gives them accurate information about their environments.

### Chapter 10: "Hand-Eye" Research

- McCarthy told me that he got interested in robots because of his interest in computer vision.
- He wasn't excited about the work in pattern recognition "it was "discrimination" rather than "description."
- Mostly about robots which I'm not interested in.

### Chapter 11: Knowledge Representation and Reasoning

- For a system to be intelligent, it must have knowledge about its world and the means to draw conclusions from, or at least act on, that knowledge.
- Humans and machines alike therefore must have ways to represent this needed knowledge in internal structures, whether encoded in protein or silicon.
- Cognitive scientists and AI researchers distinguish between two main ways in which knowledge is represented: procedural and declarative.
- Semantic networks were another important format for representing declarative knowledge.
- The belief that people transform natural language sentences into "conceptual structures" that are independent of the particular language in which the sentences were originally expressed.
- These conceptual structures were how the information in sentences is understood and remembered.
- E.g. When one translates a sentence from one language into another, one first represents its information content as a conceptual structure and then uses that structure to reason about what was said or to regenerate the information as a sentence in another language.
- "Any two utterances that can be said to mean the same thing, whether they are in the same or different languages, should be characterized in only one way by the conceptual structures."
- Frame systems accommodated a style of reasoning in which details "not specifically warranted" could be assumed, thus "bypassing "logic," as Minsky would have it.
- The last section of Minsky's paper about frames gives many reasons why one might doubt "the feasibility of representing ordinary knowledge effectively in the form of many small, independently 'true' propositions."

### Chapter 12: Mobile Robots

- The search algorithm "A*" came out of trying to find the shortest path for mobile robots.
- Skimmed due to it being on hardware/robots.

### Chapter 13: Progress in Natural Language Processing

- John Hutchins has called the period 1967 to 1976, "the quiet decade."
- Inactivity in the field during this period is due to the ALPAC report which was pessimistic about the prospects for machine translation.
- How well does Systran translate? It all depends on how one wants to measure performance. Margaret Boden mentions two measures, namely, "intelligibility" and "correctness." Both of these measures depend on human judgement.
- For the first, one asks "Can the translation be generally understood?"
- For the second, one asks "Do human 'post-editors' need to modify the translation?"
- If we really want computers to understand us, we need to give them ability to use more knowledge.
- In addition to a grammar of the language, they need to have all sorts of knowledge about the subject they are discussing, and they have to use reasoning to combine facts in the right way to understand a sentence and to respond to it.
- The success of SHRDLU fueled a debate among AI researchers about the pros and cons of procedural versus declarative knowledge.

### Chapter 14: Game Playing

- A person uses prodigious amounts of knowledge in the pattern-recognition process and a small amount of calculation to verify the fact that the proposed solution is good in the present instance.
- However, the computer would make the same maneuver because it found at the end of a large search that it was the most advantageous way to proceed out of the hundreds of thousands of possibilities.
- Berliner summed up the difference by saying that "The basis of human chess strength, by contrast [with computers], is accumulated knowledge".
- Specific knowledge about the problem being solved, as opposed to the use of massive search in solving the problem, came to be a major theme of artificial intelligence research during this period.

### Chapter 15: The Dendral Project

- An important innovation made during the Dendral project was a simulation of how a chemical structure would break up in a mass spectrometer.
- After HEURISTIC DENDRAL produced some candidate structures for a particular compound, these structures were subjected to analysis in the simulated mass spectrometer. The outputs were then compared with the actual mass spectrometer output.
- That structure whose simulated spectrogram was closest to the actual spectrogram was likely to be the actual structure of the compound.
- This process of "analysis by synthesis" came to be widely used in artificial intelligence, especially in computer vision.
- We must hypothesize from our experience to date that the problem solving power exhibited in an intelligent agent's performance is primarily a consequence of the specialist's knowledge employed by the agent, and only secondarily related to the generality and power of the inference method employed.
- Our agents must be knowledge-rich, even if they are methods-poor.
- Embedding the knowledge of experts in AI programs led to the development of many "expert systems".
- It also led to increased concentration on specific and highly constrained problems and away from focusing on the general mechanisms of intelligence.

### Chapter 16: Conferences, Books, and Funding

- During the early years, organization of the conferences was rather informal, decisions about future conferences being made by a core group of some of the leaders of the field who happened to show up at organizing meetings.
- As the field began to develop its techniques and methods, graduate courses in artificial intelligence were offered at some universities.
- Each workshop resulted in a book with the title Machine Intelligence N, where N denotes the workshop and volume number. The last few volumes have been published online by the Electronic Transactions on Artificial Intelligence. These books contain some of the most cited and important papers in the early history of the field.
- Lighthill's report somewhat idiosyncratically divided AI research into three categories:
    - advanced automation,
    - computer-based studies of the central nervous system, and
    - the bridges in between.
- He called these categories A, C, and B, respectively.
- Although he came out in favor of continued work in categories A and C, he was quite critical of most AI basic research, including robotics and language processing, which he lumped into category B.
- He wrote that "In no part of the field have the discoveries made so far produced the major impact that was then promised." He concluded that AI's existing search techniques would not scale to real problems because they would be stymied by the combinatorial explosion.
- Lighthill's report resulted in a substantial curtailment of AI research in the United Kingdom.

## Part IV: Applications and Specializations: 1970s to Early 1980s

### Chapter 17: Speech Recognition and Understanding Systems

- The difference between recognizing an isolated spoken word versus processing a continuous stream of speech.
- Most AI research has concentrated on the second and harder of these problems.
- Another distinction is between speech recognition and speech understanding.
- Understanding speech is more difficult than understanding text because there is the additional problem of processing the speech waveform to extract the words being uttered.
- Phones are the sounds that correspond to vowels or consonants. English speech is thought to be composed of forty or so different phones.
- Special alphabets have been devised to represent phones. One is the International Phonetic Alphabet (IPA), which contains the phones of all known languages.
- Early speech recognition systems attempted first to segment the speech waveform into its constituent phones and then to assemble the phones into words.
- DRAGON used statistical techniques to make guesses about the most probable strings of words that might have produced the observed speech signal. It was an early example of the importation of probabilistic representations and associated computational methods into AI.
- DRAGON combined these separate levels into a network consisting of a hierarchy of probabilistic functions of Markov processes.
- Entities representing segments of the speech waveform were at the bottom, entities representing phones were in the middle, and entities representing words were at the top. At each level, Bayes's rule was used to compute probabilities of the x's given the y's.
- Because only the speech waveform at the bottom level was actually observed, the phones and words were said to be "hidden." For this reason, the entire network employed hidden Markov models (HMMs).
- DRAGON was the first example of the use of HMMs in AI.
- The transcription of spoken sentences to their textual equivalents is now largely a solved problem.
- E.g. High-quality speech recognition is commonly employed today in many automated telephone response systems.
- However, understanding natural language remains a long-term research problem.

### Chapter 18: Consulting Systems

- It became common to divide the program into two parts, namely, the "inference engine" for applying rules and the "knowledge base" of rules.
- In principle, new rules could be added without having to change the inference engine.
- This separation suggests that one could construct expert systems for other applications simply by replacing the medical knowledge with some other knowledge base without having to change the inference engine.

### Chapter 19: Understanding Queries and Signals

- Although one can describe generally the problems one is trying to solve, one can't describe (ahead of time) what the solutions are going to be.
- As exploratory research progresses, new problems become apparent, so one can't even describe all the problems ahead of time. One can't make the kind of detailed plan for basic research that one can make for applying already developed technology to specific applications.

### Chapter 20: Progress in Computer Vision

- Most early visual processes extract information about the visible surfaces directly, without particular regard to whether they happen to be part of a horse, or a man, or a tree.

### Chapter 21: Boomtimes

- Even though the Mansfield Amendment and the Lighthill report caused difficulties for AI research during the 1970s, the promise of important applications sustained overall funding levels from both government and industry.
- The boom continued with Japan's "Fifth Generation Computer Systems" project.
- That project helped DARPA justify its "Strategic Computing Initiative."
- It also helped to provoke the formation of similar research efforts in Europe as well as the formation of American industrial consortia for furthering advances in computer hardware.
- Assessments of some of AI's difficulties and achievements, compared to some of its promises, led to the end of the boom in the late 1980s causing what some called an "AI winter."

## Part V: "New-Generation" Projects

### Chapter 22: The Japanese Create a Stir

- In 1982, Japan's Ministry of International Trade and Industry launched a joint government and industry project to develop what they called "Fifth Generation Computer Systems" (FGCS).
- Its goal was to produce computers that could perform AI-style inferences from large data and knowledge bases and communicate with humans using natural language.
- "Fifth Generation" was meant to emphasize dramatic progress beyond previous "generations" of computer technology.
- The first generation, developed during and after World War II, used vacuum tubes.
- Around 1959, transistors replaced vacuum tubes giving rise to the second generation.
- During the 1960s, transistors and other components were fabricated on single silicon wafer "chips," and the several chips comprising a computer were connected together by wires.
- Computers using this so-called small-scale integration (SSI) technology comprised the third generation.
- In the late 1970s, entire microprocessors could be put on a single chip using "large-scale integration" technology the fourth generation.
- The Japanese fifth generation was to involve many parallel processors using "ultra large-scale integration".
- Many observers think that most of the results of the FGCS project are now of historical interest only. The software developed did not find notable applications.
- According to Oakley, "If the Lighthill Report of the early 1970s was paradise lost for the AI community, the Alvey Report of the early 1980s was paradise regained."

### Chapter 23: DARPA's Strategic Computing Program

- DARPA should sponsor a major research and development program that would integrate efforts in all of these areas to create much more powerful computer systems.
- At the same time, there was concern that the Japanese FGCS program could threaten U.S. leadership in computer technology.
- With these factors as background, Kahn began planning what would come to be called the "Strategic Computing" (SC) program.
- The architects of SC believed in 1983 that AI was ripe for exploitation. It was finally moving out of the laboratory and into the real world. AI would become an essential component of SC; expert systems would be the centerpiece.
- Most commentators doubt that the SC program achieved its goal of pulling new AI technology into the SC applications.
- Developing the kinds of capabilities envisioned by the SC applications required AI inventions, and the atmosphere needed for invention is not conducive to tightly programmed milestone demonstrations.

## Part VI: Entr'acte

### Chapter 24: Speed Bumps

- One of the best chapters in this textbook.
- There have been naysayers from the earliest days of artificial intelligence. Alan Turing anticipated some of their objections in his 1950 paper.
- In this chapter, I'll recount some of the controversies surrounding AI.
- No one supposes that computer simulations of a fire will burn the neighborhood down or that a computer simulation of a rainstorm will leave us all drenched.
- Why suppose that a computer simulation of understanding actually understood anything?
- For simulation, all you need is the right input and output and a program in the middle that transforms the former into the latter.
- To confuse simulation with duplication is the same mistake.
- The meaning of a term is represented by its place in the network and how it's connected to other terms. This same idea is used in dictionaries where the meaning of a word is given by mentioning the relationship of this word to other words.
- The meanings of those other words are given by their relationships to yet other words. So we can think of a dictionary as being like a large semantic network of words linked to other words.
- "We don't know the equations describing the physical processes in the brain, and even if we did, the solution of the equations describing the simplest reaction would take a prohibitive amount of time."
- "Significant developments in artificial intelligence must await an entirely different sort of computer. The only existing prototype for it's the little-understood human brain."
- In addition to concerns about AI's overstated claims, many computer scientists thought AI to be a kind of fringe activity that did not adhere to rigorous scientific standards.
- Concern for "respectability" has had a stultifying effect on some AI researchers. I hear them saying things like, "AI used to be criticized for its flossiness. Now that we have made solid progress, let us not risk losing our respectability."
- One result of this conservatism has been increased concentration on "weak AI" and away from "strong AI".
- This is too bad because although I think the goals of weak AI are important and worthy, building an artifact that mimics the abilities of the human brain would be a tremendous scientific achievement.
- One of the reasons why expert systems are brittle is that they lack "common sense."
- In addition to the expert knowledge that humans might acquire through education and professional experience, they also have a lot of general knowledge.
- E.g. That only females can become pregnant, that umbrellas protect against sun and rain, that certain birds migrate, that food can be purchased in markets, and millions upon millions of other facts.
- "Commonsense knowledge is knowledge about the structure of the external world that is acquired and applied without concentrated effort by any normal human that allows him or her to meet the everyday demands of the physical, spatial, temporal and social environment with a reasonable degree of success."
- It seems that the knowledge of any particular human should be thought of as an ever-growing tree whose base and lower branches comprise "common sense" and whose upper ramifications comprise the "expertise" of specialized disciplines that the person might have learned.
- The tree metaphor is also useful in emphasizing the point that the knowledge in the upper branches uses concepts that occur in the trunk and lower branches.
- During the early 1980s, many AI sponsors had greatly inflated expectations of what AI could do.
- Undoubtedly, some of the blame for their unjustified optimism could be placed on AI researchers themselves who were motivated to make exaggerated promises.
- The failure to deliver systems matching these unrealistic hopes, together with the accumulating critical commentary that I have already mentioned, combined in the mid to late 1980s to bring on what came to be called an "AI winter."

### Chapter 25: Controversies and Alternative Paradigms

- Frustrated with AI's slowdown, people with different approaches to AI eagerly stepped forward to claim that what AI needed was more of this or that alternative to AI's reigning paradigm "good-old-fashioned AI" or GOFAI.
- GOFAI had as its primary rationale the belief that a "physical symbol system has the necessary and sufficient means for intelligent action." But GOFAI seemed to be running out of steam during the 1980s, making it vulnerable to challenges by AI researchers themselves.
- Another objection to the use of logical representations was based on the fact that logical sentences must be either true or false whereas so much of human knowledge is uncertain.
- The brain's functions simply aren't based on any small set of principles. Instead, they're based on hundreds or perhaps even thousands of them.
- In other words, the brain is what engineers call a kludge, a jury-rigged solution to a problem, accomplished by adding bits of machinery wherever needed, without any general, overall plan.
- The result is that the human mind should be regarded as a collection of kludges. The evidence for this is perfectly clear: If you look at the index of any large textbook of neuroscience, you'll see that a human brain has many hundreds of parts - that is, subcomputers - that do different things.
- Why do our brains need so many parts? Surely, if our minds were based on only a few basic principles, we wouldn't need so much complexity.
- Just because the brain is a kludge does not mean that computer intelligences have to be.
- Nevertheless, some AI researchers favored systems consisting of collections of experimentally derived, ad hoc routines designed to solve specific problems. These people called themselves "scruffies" to distinguish themselves from the "neats" who favored programs based on theoretically based principles.
- Because apparently the brain does what it does by massive parallel computations implemented by networks of interconnected neurons, some people began anew to explore the possibilities of neural networks.
- During the late 1970s a group at the University of California at San Diego headed by cognitive psychologists David E. Rumelhart and James L. McClelland began a study of networks that they called "parallel distributed processing" (PDP) systems.
- "The common theme to all these efforts has been an interest in looking at the brain as a model of a parallel computational device different from that of a traditional serial computer."
- Much of the neural network research during this period came to be called "connectionist" or "brain-style" computation, to contrast it with GOFAI.
- "Virtually all problems in artificial intelligence, machine learning, adaptive systems, and automated learning can be recast as a search for a computer program. Genetic programming provides a way to successfully conduct the search for a computer program in the space of computer programs."

## Part VII: The Growing Armamentarium: From the 1980s Onward

### Chapter 26: Reasoning and Representation

- Those AI researchers called logicists, who favor the use of logical languages for representing knowledge and the use of logical methods for reasoning, acknowledge one problem with ordinary logic; namely, it's monotonic.
- By that they mean that the set of logical conclusions that can be drawn from a set of logical statements does not decrease as more statements are added to the set. If one could prove a statement from a given knowledge base, one could still prove that same statement when more knowledge is added.
- Yet, much human reasoning does not seem to work that way. Often, we jump to a conclusion using the facts we happen to have, together with reasonable assumptions, and then have to retract that conclusion when we learn some new fact that contradicts the assumptions.
- That style of reasoning is called nonmonotonic or defeasible (meaning "capable of being made or declared null and void") because new facts might require taking back something concluded before.
- We humans are also able to predict, with useful accuracies, the future course of many of the physical processes we commonly experience.
- E.g. When people play in ocean waves at the beach, they are usually able to predict when a wave crest will arrive so that they can jump up in time. Do our brains use anything like the equation just shown to make that prediction? Probably not.
- Instead, prediction routines for guiding skilled actions are learned by repeated experiences and are part of what psychologists call "procedural knowledge."
- In addition to acting automatically and effectively using procedural knowledge embedded in our various motor skills, we can also make declarative statements predicting what will happen in certain situations.
- E.g. A surfer looking out at incoming waves can tell a friend "Take the next wave; it's going to be a big one."
- Apparently we have some facility for representing and using "qualitative knowledge" about physical processes - knowledge that is neither part of our procedural "muscle memory" nor represented in our brains by complex mathematical formulas.
- E.g. How do we know that when we knock over a glass of water on a table the water will eventually come to the edge of the table and spill off? How do we know that if we stack heavy boxes on top of light, fragile boxes, the fragile boxes might collapse? How do we know that if we drive to our destination a little bit faster, we'll get there a little bit sooner?
- Earlier in AI's history there was controversy about whether knowledge should be represented by data structures such as semantic networks or by sets of logical statements.
- Gradually the controversy moderated because researchers came to accept the idea that semantic networks could be thought of as a special way of representing certain kinds of logical statements, thereby permitting some deductions to be made directly from the network.
- Decided to undertake the immense task of providing computers with common-sense knowledge. The first step, he thought, would be to "prime the pump with the millions of everyday terms, concepts, facts, and rules of thumb" that comprise common sense.

### Chapter 27: Other Approaches to Reasoning and Representation

- No notes because it wasn't interesting.

### Chapter 28: Bayesian Networks

- Much human reasoning is about propositions and quantities that are uncertain. Our beliefs about many things are provisional (that is, subject to change) and qualified (that is, having various levels of confidence).
- AI systems, too, need to be able to deal with uncertain information.
- But just as is the case with logical reasoning, probabilistic reasoning is subject to AI's old nemesis, the combinatorial explosion.
- E.g. An agent's knowledge consists of a set of propositions. Because of possible interdependencies among the propositions, accurate probabilistic reasoning depends on knowing more than just the probability of each of those propositions individually. Instead, probability values for various combinations of the propositions taken together, called "joint probabilities," are usually required; this leads, in the general case, to impractically large representations and intractable computations.
- One thing that all of these applications has taught us is the importance of massive amounts of data, which has turned out to be the major theme of modern AI.
- The fact that full explanations involve rather complex mathematics testifies again to the great increase in AI's technical depth that began in the 1980s.

### Chapter 29: Machine Learning

- Most machine learning methods construct hypotheses from data.
- E.g. If a large set of data contains several instances of swans being white and no instances of swans being of other colors, then a machine learning algorithm might make the inference that "all swans are white."
- Such an inference is "inductive" rather than "deductive." Deductive inferences follow necessarily and logically from their premisses, whereas inductive ones are hypotheses, which are always subject to falsification by additional data.
- Still, inductive inferences, based on large amounts of data, are extremely useful. Indeed, science itself is based on inductive inferences.
- The usual AI approach to dealing with large quantities of data is to reduce the amount of it in some way.
- E.g. A neural network is able to represent what is important about a large amount of training data by the network's structure and weight values. Similarly, learning a Bayesian network from data condenses these data into the network's node structure and its conditional probability tables.
- The basic idea behind backprop is simple, but the mathematics is complicated.
- In response to an error in the network's output, backprop makes small adjustments in all of the weights so as to reduce that error. It can be regarded as a hill-climbing (or rather hill-descending) method - searching for low values of error over the landscape of weights.
- But rather than actually trying out all possible small weight changes and deciding on that set of them that corresponds to the steepest descent downhill, backprop uses calculus to pre-compute the best set of weight changes.
- The decision tree and neural network learning methods described so far are examples of "supervised learning", a type of learning in which one attempts to learn to classify data from a large sample of training data whose classifications are known.
- The "supervision" that directs learning in these systems involves informing the system about the classification of each datum in the training set.
- Yet, it's sometimes possible to construct useful classification of data based just on the data alone. Techniques for doing so fall under the heading of "unsupervised learning."
- Reinforcement learning is about learning how to traverse a collection of states, going from one state to another and so on, to reach a state in which a reward is obtained.
- The problem is much like one that a rat faces in learning how to run a maze (or one that a robot faces in learning how to carry out a task).
- As in all reinforcement learning procedures, values are gradually propagated backward from the end of the game toward the starting position.
- To make effective decisions while navigating uncertain environments, animals must develop the ability to accurately predict the consequences of their actions. Reinforcement learning has emerged as a key theoretical paradigm for understanding how animals accomplish this feat.
- We want it to be such that the distances from it to the closest points of opposite categories are as large as possible. The parallel dashed lines on either side go through these closest points, which are called "support vectors." Boundaries with margins as large as possible are desirable because they are better at classifying new points not in the training set.
- That is, they have better "generalizing" properties.
- SVMs and kernel machines are superb examples of how work in several disciplines, using highly technical mathematical apparatus, has contributed to powerful new techniques in artificial intelligence.

### Chapter 30: Natural Languages and Natural Scenes

- Systems that use grammars for analyzing natural language sentences must use parsing algorithms to search among candidate "parse trees" to find one or more that fits an input sentence.
- For realistic grammars that "accept" those word strings we think of as legal sentences and reject those strings we take to be non-sentences, it's often the case that there are many possible parses, each conveying a different meaning.
- Choosing one "best" parse tree from among all of these then depends on semantic and pragmatic analyses, which take into account the context in which the sentence occurs and common-sense world knowledge.
- This is because people are always stretching and bending the 'rules' to meet their communicative needs."
- This fact was recognized quite early in the study of language. The linguist and anthropologist Edward Sapir wrote "Unfortunately, or luckily, no language is tyrannically consistent. All grammars leak.
- Sapir meant, of course, that any grammar, no matter how complex, will accept some sentences that people find unacceptable and reject some that people find acceptable.
- Eugene Charniak proposed that syntactic analyses should be qualified by probabilities. Some sentences are "probably" ok, and some are probably not, and there are all gradations in between. An immediate advantage of such an approach is that the probability of a parse can be used to choose among alternative parses for ambiguous sentences.
- I believe that one of the potentially most promising developments in computer vision involves hierarchical models. There are different versions of these models, and different ways to construct them, but if we stand far enough back from the details, they have similar structures and features.
- Jeff Hawkins, the designer of the original Palm Pilot, has suggested that the neocortex is a hierarchical temporal memory whose layers (from bottom to top) store increasingly abstract representations of sensory input sequences and whose function (from top to bottom) is to make increasingly detailed predictions of future experience.
- He proposes that the visual cortex learns in unsupervised fashion by being subjected to sequences of images in time. Because we see images as they occur continuously in time, there are bound to be stretches in which each image is of the same object moving across our visual field - albeit appearing at different translations, scales, and orientations.
- This sameness provides an implicit labeling that is exploited in learning representations at all levels of the hierarchy.
- Furthermore, Hawkins claims the hierarchical memory and its learning procedures are used not only for visual input but for other sensory modalities as well.
- At the highest levels of the hierarchy these separate modalities combine to give an integrated model of our sensory world based on vision, touch, and hearing - a model we use to make predictions about what might be happening next.

### Chapter 31: Intelligent System Architectures

- Parallelism can be accomplished by either actually having several hardware processors to which programs are farmed out for execution or by the simulation of parallel operation in which the programs are actually being executed in sequence.
- The "reference model architecture" consists of multiple layers of "real-time control systems" developed earlier as components of a "theory of intelligence."
- Each RCS partitions the control problem into four basic elements:
    - behavior generation (or task decomposition),
    - world modeling,
    - sensory processing, and
    - value judgment.
- It clusters these elements into computational nodes that have responsibility for specific subsystems, and arranges these nodes in hierarchical layers such that each layer has characteristic functionality and timing.
- There are two types of memory modules.
- Declarative Memory consists of facts, such as "Washington, DC is the capital of the United States, France is a country in Europe, or 2 + 3 = 5."
- Declarative knowledge is represented by units called chunks.
- Procedural Memory consists of production rules representing "knowledge about how we do things: for instance, knowledge about how to type the letter 'Q' on a keyboard, about how to drive, or about how to perform addition."
- Often we are unable to verbalize our knowledge about how we do certain things: We just do them; thus knowledge about them is considered procedural, not declarative.

## Part VIII: Modern AI: Today and Tomorrow

### Chapter 32: Extraordinary Achievements

- Does Deep Blue use artificial intelligence?
- The short answer is "no."
- Earlier computer designs that tried to mimic human thinking weren't good at it. No formula exists for intuition.
- Deep Blue relies more on computational power and a simpler search and evaluation function.
- Although Deep Blue relied mainly on brute-force methods rather than on rule-based reasoning, it did use heuristic search, one of AI's foundational techniques.
- The differences between Kasparov and Deep Blue simply indicate how much better chess programs would fare if they employed human-chess-playing knowledge and skills and machine learning methods in addition to brute force.

### Chapter 33: Ubiquitous Artificial Intelligence

- First, it's the technology of how to apply knowledge to action to achieve goals.
- The second ingredient is the miniaturization of the physical systems that have this ability for intelligent action.
- Thus, computer technology differs from all other technologies precisely in providing the capability for an enchanted world.
- In short, computer technology offers the possibility of incorporating intelligent behavior in all the nooks and crannies of our world.
- With it we could build an enchanted land.

### Chapter 34: Smart Tools

- The goal of the group is to produce what they call "human-competitive designs," ones whose specifications meet or exceed those of the best human designers.
- Some parts of the quest for artificial intelligence have been quite successful. AI has become more and more a part of all of our lives as well as of those of specialists.
- But the main goal of the quest still remains, namely, endowing artifacts with full human capabilities for language, perception, reasoning, and learning.

### Chapter 35: The Quest Continues

- All AI researchers agree that both common-sense knowledge and specialized knowledge is the key to intelligence. Various approaches have been pursued to gather and organize that knowledge in a form exploitable by computer programs.
- A third approach is to build programs that can read and understand natural language.
- After all, as the proponents of that approach claim, the world is full of knowledge - in books, in news feeds, and on the Web.
- As we have already seen, computer understanding of natural language requires both general common-sense knowledge and background knowledge about the subject matter of the text.
- Thus, "Learning by Reading", as this third approach is called, draws on the technologies of knowledge representation and reasoning as well as on natural language processing.
- "Eye on the Prize" argued that AI researchers ought to be putting more effort into developing generally intelligent systems in addition to their work on the kinds of smart tools.
- I suggested that AI ought to focus on building what I called "habile" systems - ones that could learn to use smart tools, just as humans are able to learn to use them.
- More generally, it has always seemed to me that AI's grand goal (the "prize" we are questing for) should be to develop artifacts that can do most of the things that humans can do - specifically those things that are thought to require "intelligence."
- These systems would have what some AI researchers have called "Human Level Artificial Intelligence" (HLAI).
- HLAI was the goal of the founders and of many other early AI researchers. John McCarthy claims that the "first scientific discussion of human level machine intelligence was apparently by Alan Turing".
- Turing made the mechanization of human-level intelligence an explicit goal in his 1950 "Computing Machinery and Intelligence" paper.
- Later, in the proposal for the 1956 Dartmouth Summer Study, John McCarthy wrote "The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."
- In a 2003 paper, Edward Feigenbaum concluded "Computational Intelligence is the manifest destiny of computer science, the goal, the destination, the final frontier. More than any other field of science, our computer science concepts and methods are central to the quest to unravel and understand one of the grandest mysteries of our existence, the nature of intelligence. Generations of computer scientists to come must be inspired by the challenges and grand challenges of this great quest."
- Let an ultraintelligent machine be dened as a machine that can far surpass all the intellectual activities of any man however clever. Since the design of machines is one of these intellectual activities, an ultraintelligent machine could design even better machines; there would then unquestionably be an "intelligence explosion," and the intelligence of man would be left far behind.
- Thus the first ultraintelligent machine is the last invention that man need ever make, provided that the machine is docile enough to tell us how to keep it under control.
- If artificial intelligences can be created at all, there is little reason to believe that initial successes could not lead swiftly to the construction of artificial superintelligences able to explore significant mathematical, scientific, or engineering alternatives at a rate far exceeding human ability, or to generate plans and take action on them with equally overwhelming speed.
- Since man's near-monopoly of all higher forms of intelligence has been one of the most basic facts of human existence throughout the past history of this planet, such developments would clearly create a new economics, a new sociology, and a new history.
- To pass the test "programs must be able to perform the jobs ordinarily performed by humans. Progress toward human-level AI could then be measured by the fraction of these jobs that can be acceptably performed by machines."
- I had in mind all kinds of jobs that humans get paid to perform - from skilled and unskilled labor to managerial and office work.
- Even though we already have AI systems that can do some things better than humans can do them, there are still many, many human cognitive skills that we don't yet know how to automate.
- I believe there are two reasons why AI researchers will continue to strive to automate these skills.
    - One is economic: The prospect of someday being able to employ AI systems rather than more expensive humans will sustain a strong and irresistible urge to build artifacts that can do what we now pay humans to do.
    - The other reason is scientific: In their attempts to understand how the human brain works, people will continue to build computational models of its many functions. Thus, I think achieving some version of HLAI will continue to be AI's long-term goal.
- John McCarthy mentions two approaches toward achieving HLAI.
    - One is to attempt to simulate how the human intellect works, but, as he wrote, "Understanding the human brain well enough to imitate its function requires theoretical and experimental success in psychology and neurophysiology."
    - The other is to write programs that mimic human intelligent behavior, which is what AI researchers have largely been trying to do. McCarthy says that "It'sn't a question of deciding between them, because each should eventually succeed; it's more a race."
- Minsky was right. We've been trying the alternatives of "advanced resources, given initially," and simulating "organic evolution." These approaches have produced smart tools and other useful programs but not HLAI yet. What about working on a "graded sequence of problems of growing difficulty"? This strategy has been suggested and deserves serious consideration.
- In his 1950 paper, Alan Turing suggested that "Instead of trying to produce a programme to simulate the adult mind, why not rather try to produce one which simulates the child's? If this were then subjected to an appropriate course of education one would obtain the adult brain." The "appropriate course of education" would then correspond to Minsky's "graded sequence of problems."
- "understanding the human brain well enough to imitate its function," there has been work on that problem too. Several computer scientists are attempting to use concepts familiar to AI people to explain the brain.
- I have already mentioned the hierarchical models of the cortex proposed by Mumford, Hinton, Hawkins, Dean, and their various colleagues. Building on features of primitive sensory inputs from an array of pixels, for example, and ascending through ever-more-abstract percepts, these models are able to learn to classify images independently of size, translation, and orientation.
- Yet, to my knowledge, no work has yet been done to use these models for more than perception. Can they learn to understand, to reason, to plan, and to select actions?
- In 2007, Modha's team carried out an historic experiment in which they constructed a computer simulation of a rat-scale model of the cortex (with 55 million spiking neurons and 448 billion synapses with spike-timing-dependent plasticity) that could function in near real-time using a BlueGene supercomputer with 32,768 processors and 8 TB of main memory.
- Modha is the principal investigator of a DARPA project to develop "Systems of Neuromorphic Adaptive Plastic Scalable Electronics" (SyNAPSE), or a project whose goal is to build a machine that mimics the actions of about 100 million neurons.
- That's twice the number of neurons in a rat brain but only about 0.25% of the number in a human brain. One can hope that the top-down and bottom-up approaches will meet in the middle somewhere.
- Even setting this nightmare aside, one can fear a variety of more subtle deleterious impacts.
- E.g. Rapid collapse of human society into a self-destructive pure hedonism once all pressures, and perhaps even reasons or opportunities, for work and striving are undermined by the presence of unchallengeable omnicompetent mechanisms.
- Certainly man's remaining sense of his own uniqueness may be further impaired, and he may come to seem in his own eyes little more than a primitive animal, capable only of fleeting enjoyments.
- Omohundro wants to make sure that we build "wisdom," and not just intelligence, into our technologies.
- By that he means building in "human values, such as caring about human rights and property rights and having compassion for other entities." He thinks it "absolutely critical that we build these in at the beginning, otherwise we'll get systems that are powerful, but which don't support our values."
- Omohundro brings up valid concerns, but to put his version of wisdom into AI systems we'll first have to agree on just what we mean by "human values." That will be tough given that our different opinions about values often lead to wars.
- In any case, we should continue to pursue many different approaches, guided by our best judgments. It's like heuristic search for a goal that we'll recognize when we achieve it.
- Several disciplines have contributed to AI's successes.
- The early AI pioneers used many clues about how to proceed - clues from mathematics and logic, from neuroscience, from linguistics, from statistics and probability theory, from control engineering, from psychology, and from computer science.
- Indeed, the substantial progress made in the quest for AI to date is due to the use of ideas from all of those disciplines. No overarching theory of AI has yet emerged, nor is one likely to in my opinion.
- The quest will continue. What combinations of AI's methods, buttressed by AI's supporting disciplines, will be used in the intelligent systems of the future? No one really knows, so we'll have to keep all of them active on AI's "search frontier."
- Some of the ones developed early in the quest (and now perhaps forgotten) might with better technology be useful.
- Researchers who want to pursue the quest should be familiar with the full variety of AI's methods, its contributing disciplines, and its history.
