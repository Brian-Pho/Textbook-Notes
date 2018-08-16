---
layout: post
title: "The Quest for Artificial Intelligence"
categories:
- Textbooks
book: "the-quest-for-artificial-intelligence"
book_authors: "Nils Nilsson"
excerpt: "Motivation and history before I delve deep into AI."
---

<p class="message">
Nobody phrases it this way, but I think that artificial intelligence is almost a humanities discipline. It's really an attempt to understand human intelligence and human cognition. - Sebastian Thrun
</p>

<details>
<summary>Table of Contents</summary>
<div markdown="1">

- [Part One: Beginnings](#part-one-beginnings)
  - [Chapter One: Dreams and Dreamers](#chapter-one-dreams-and-dreamers)
  - [Chapter Two: Clues](#chapter-two-clues)
- [Part Two: Early Explorations: 1950s and 1960s](#part-two-early-explorations-1950s-and-1960s)
  - [Chapter Three: Gatherings](#chapter-three-gatherings)
  - [Chapter Four: Pattern Recognition](#chapter-four-pattern-recognition)
  - [Chapter Five: Early Heuristics Programs](#chapter-five-early-heuristics-programs)
  - [Chapter Six: Semantic Representations](#chapter-six-semantic-representations)
  - [Chapter Seven: Natural Language Processing](#chapter-seven-natural-language-processing)
  - [Chapter Eight: 1960s' Infrastructure](#chapter-eight-1960s-infrastructure)
- [Part Three: Efflorescence: Mid-1960s to Mid-1970s](#part-three-efflorescence-mid-1960s-to-mid-1970s)
  - [Chapter Nine: Computer Vision](#chapter-nine-computer-vision)
  - [Chapter Ten: "Hand-Eye" Research](#chapter-ten-%22hand-eye%22-research)
  - [Chapter Eleven: Knowledge Representation and Reasoning](#chapter-eleven-knowledge-representation-and-reasoning)
  - [Chapter Twelve: Mobile Robots](#chapter-twelve-mobile-robots)
  - [Chapter Thirteen: Progress in Natural Language Processing](#chapter-thirteen-progress-in-natural-language-processing)
  - [Chapter Fourteen: Game Playing](#chapter-fourteen-game-playing)
  - [Chapter Fifteen: The Dendral Project](#chapter-fifteen-the-dendral-project)
  - [Chapter Sixteen: Conferences, Books, and Funding](#chapter-sixteen-conferences-books-and-funding)
- [Part Four: Applications and Specializations: 1970s to Early 1980s](#part-four-applications-and-specializations-1970s-to-early-1980s)
  - [Chapter Seventeen: Speech Recognition and Understanding Systems](#chapter-seventeen-speech-recognition-and-understanding-systems)
  - [Chapter Eighteen: Consulting Systems](#chapter-eighteen-consulting-systems)
  - [Chapter Nineteen: Understanding Queries and Signals](#chapter-nineteen-understanding-queries-and-signals)
  - [Chapter Twenty: Progress in Computer Vision](#chapter-twenty-progress-in-computer-vision)
  - [Chapter Twenty-One: Boomtimes](#chapter-twenty-one-boomtimes)
- [Part Five: "New-Generation" Projects](#part-five-%22new-generation%22-projects)
  - [Chapter Twenty-Two: The Japanese Create a Stir](#chapter-twenty-two-the-japanese-create-a-stir)
  - [Chapter Twenty-Three: DARPA's Strategic Computing Program](#chapter-twenty-three-darpas-strategic-computing-program)
- [Part Six: Entr'acte](#part-six-entracte)
  - [Chapter Twenty-Four: Speed Bumps](#chapter-twenty-four-speed-bumps)
  - [Chapter Twenty-Five: Controversies and Alternative Paradigms](#chapter-twenty-five-controversies-and-alternative-paradigms)
- [Part Seven: The Growing Armamentarium: From the 1980s Onward](#part-seven-the-growing-armamentarium-from-the-1980s-onward)
  - [Chapter Twenty-Six: Reasoning and Representation](#chapter-twenty-six-reasoning-and-representation)
  - [Chapter Twenty-Seven: Other Approaches to Reasoning and Representation](#chapter-twenty-seven-other-approaches-to-reasoning-and-representation)
  - [Chapter Twenty-Eight: Bayesian Networks](#chapter-twenty-eight-bayesian-networks)
  - [Chapter Twenty-Nine: Machine Learning](#chapter-twenty-nine-machine-learning)
  - [Chapter Thirty: Natural Languages and Natural Scenes](#chapter-thirty-natural-languages-and-natural-scenes)
  - [Chapter Thirty-One: Intelligent System Architectures](#chapter-thirty-one-intelligent-system-architectures)
- [Part Eight: Modern AI: Today and Tomorrow](#part-eight-modern-ai-today-and-tomorrow)
  - [Chapter Thirty-Two: Extraordinary Achievements](#chapter-thirty-two-extraordinary-achievements)
  - [Chapter Thirty-Three: Ubiquitous Artificial Intelligence](#chapter-thirty-three-ubiquitous-artificial-intelligence)
  - [Chapter Thirty-Four: Smart Tools](#chapter-thirty-four-smart-tools)
  - [Chapter Thirty-Five: The Quest Continues](#chapter-thirty-five-the-quest-continues)

</div>
</details>

## Part One: Beginnings

---

### Chapter One: Dreams and Dreamers

- For seeing life is but a motion of limbs, the beginning whereof is in
some principal part within, why may we not say that all automata
(engines that move themselves by springs and wheels as doth a 
watch) have an articial life? For what is the heart, but a spring;
and the nerves, but so many strings; and the joints, but so many
wheels, giving motion to the whole body. . .
- Thomas Hobbes in Leviathan
- The quest for articial intelligence, quixotic or not, begins with dreams
like these. But to turn dreams into reality requires usable clues about how to
proceed. Fortunately, there were many such clues, as we shall see.

### Chapter Two: Clues

- Clues about what might be needed to make machines intelligent are scattered abundantly throughout philosophy, logic, biology, psychology, statistics, and engineering.
- Leibniz conceived of and attempted to design a language in which all  human knowledge could be formulated { even philosophical and metaphysical knowledge. He speculated that the propositions that constitute knowledge could be built from a smaller number of primitive ones { just as all words can be built from letters in an alphabetic language. His lingua characteristica or universal language would consist of these primitive propositions, which would comprise an alphabet for human thoughts.
- The main problem in applying this idea was discovering the components of the primitive "alphabet."- Invent an alphabet of simple symbols and the means for combining them into more complex expressions.
- We would like to mechanize the reasoning process, why?- Several aspects of "life" have, in fact, provided important clues about intelligence. Because it is the brain of an animal that is responsible for converting sensory information into action, it is to be expected that several good ideas can be found in the work of neurophysiologists and neuroanatomists who study brains and their fundamental components, neurons. Other ideas are provided by the work of psychologists who study (in various ways) intelligent behavior as it is actually happening. And because, after all, it is evolutionary processes that have produced intelligent life, those processes too provide important hints about how to proceed.
- In the late nineteenth and early twentieth centuries, the "neuron doctrine" specified that living cells called \neurons" together with their interconnections were fundamental to what the brain does.
- Warren McCulloch and Walter Pitts show in a famous and important paper they proposed simple models of neurons and showed that networks of these models could perform all possible computational operations.
- The behaviorists argued that psychology should be a science of behavior, not of the mind. They rejected the idea of trying to identify internal mental states such as beliefs, intentions, desires, and goals.
- Chomsky claimed that all humans have at birth a "universal  grammar" (or developmental mechanisms for creating one) that accounts for much of their ability to learn and use languages.
- Importantly, he also claimed that \the span of immediate memory seems to be almost independent of the number of bits per chunk." That is, it doesn't matter what a chunk represents, be it a single digit in a phone number, a name of a person just mentioned, or a song title; we can apparently only hold seven of them (plus or minus two) in our immediate memory.
- Cognitive science attempted to explicate internal mental processes using ideas such as goals, memory, task queues, and strategies without (at least during its beginning years) necessarily trying to ground these processes in neurophysiology. Cognitive science and artificial intelligence have been closely related ever since their beginnings. Cognitive science has provided clues for AI researchers, and AI has helped cognitive science with newly invented concepts useful for understanding the workings of the mind.
- That living things evolve gives us two more clues about how to build intelligent artifacts. First, and most ambitiously, the processes of evolution itself { namely, random generation and selective survival { might be simulated on computers to produce the machines we dream about. Second, those paths that evolution followed in producing increasingly intelligent animals can be used as a guide for creating increasingly intelligent artifacts.
- Minsky attributes the poor performance of Friedberg's methods to the fact that each descendant machine differed very little from its parent, whereas any helpful improvement would require a much larger step in the "space" of possible machines.
- Researchers would ultimately come to recognize that all of these evolutionary methods were elaborations of a very useful mathematical search strategy called "gradient ascent" or "hill climbing."
- Start with a machine that is able to do what an infant can do, and then design machines that can mimic the abilities of children at each rung of the ladder. This strategy might be called "ontogenetic" to contrast it with the \phylogenetic" strategy of using simlulated evolution. Of course, it may be that an infant mind is far too complicated to simulate and the processes of its maturation too difficult to follow. In any case, this particular clue remains to be exploited.
- If the aspect of behavior that is fed back acts to
diminish or reverse that aspect, the process is called \negative feedback." If,
on the other hand, it acts to increase or accentuate that aspect of behavior, it
is called \positive feedback."
- Ashby emphasized that self-organization is not a property of an
organism itself, in response to its environment and experience, but a property
of the organism and its environment taken together. Although self-organization
appears to be important in ideas about how life originated, it is unclear
whether or not it provides clues for building intelligent machines.
- Storing the program allows changes in the program to be made easily, but more importantly it allows the program to change itself by changing appropriate parts of the memory where the program is stored.
- The importance of the universal machine is clear. We do not need to have an
infinity of different machines doing different jobs. A single one will suffice. The
engineering problem of producing various machines for various jobs is replaced
by the office work of `programming' the universal machine to do these jobs.
- Argument from Continuity in the Nervous System: The
nervous system is certainly not a discrete-state machine. A small
error in the information about the size of a nervous impulse
impinging on a neuron may make a large dierence to the size of
the outgoing impulse. It may be argued that, this being so, one
cannot expect to be able to mimic the behavior of the nervous
system with a discrete-state system.
- Toward the end of his paper, he suggests, \Instead of
trying to produce a programme to simulate the adult mind, why not rather try
to produce one which simulates the child's? If this were then subjected to an
appropriate course of education one would obtain the adult brain." This
suggestion is really the source for the idea mentioned earlier about using an
ontogenetic strategy to develop intelligent machines.

## Part Two: Early Explorations: 1950s and 1960s

---

### Chapter Three: Gatherings

- If machines are to become intelligent, they must, at the very least, be able
to do the thinking-related things that humans can do. The rst steps then in
the quest for articial intelligence involved identifying some specic tasks
thought to require intelligence and guring out how to get machines to do
them. Solving puzzles, playing games such as chess and checkers, proving
theorems, answering simple questions, and classifying visual images were
among some of the problems tackled by the early pioneers during the 1950s
and early 1960s.
- The emergence of articial intelligence as a full-fledged area of research
coincided with (and was launched by) three important meetings { one in 1955,
one in 1956, and one in 1958. In 1955, a \Session on Learning Machines" was
held in conjunction with the 1955 Western Joint Computer Conference in Los
Angeles. In 1956 a \Summer Research Project on Articial Intelligence" was
convened at Dartmouth College. And in 1958 a symposium on the
\Mechanization of Thought Processes," was sponsored by the National
Physical Laboratory in the United Kingdom.
- 1955: To \come to the same thing," these two approaches, neural
modeling and symbol processing, must be recognized simply as different levels
of description of what goes on in the brain. Different levels are appropriate for
describing different kinds of mental phenomena. I'll have more to say about
description levels later in the book.
- 1956: The study is to proceed on the basis of
the conjecture that every aspect of learning or any other feature of
intelligence can in principle be so precisely described that a
machine can be made to simulate it.
(Later, Newell became reconciled to the name. In commenting about the
content of the eld, he concluded, \So cherish the name articial intelligence.
It is a good name. Like all names of scientic elds, it will grow to become
exactly what its eld comes to mean.")
In any case, the 1956 workshop is considered to be
the ocial beginning of serious work in articial intelligence, and Minsky,
McCarthy, Newell, and Simon came to be regarded as the \fathers" of AI.
- 1958: The proceedings of this conference contains some papers that became
quite in
uential in the history of articial intelligence. Among these, I'll
mention ones by Minsky, McCarthy, and Selfridge.
Thus, Pandemonium can take the form of a neural
network, a hierarchically organized set of symbol processors { all working in
parallel, or some combination of these forms. If the latter, the model is a
provocative proposal for joining these two disparate approaches to AI.
- These are computational processes that \look at" the input data,
say an image of a printed letter or number. Each demon looks for something
specic in the image, perhaps a horizontal bar; another might look for a
vertical bar; another for an arc of a circle; and so on. Each demon \shouts" its
ndings to a set of demons higher in the organization. (Think of these higher
level demons as middle-level managers.) The loudness of a demon's shout
depends on how certain it is that it is seeing what it is looking for.
Each of the next level of demons specializes in listening for a particular
combination of shouts from the data demons. For example, one of the demons
at this level might be tuned to listen for shouts from data demon 3, data
demon 11, and data demon 22. If it nds that these particular demons are
shouting loudly, it responds with a shout of its own to the demons one level up
in the hierarchy, and so on.

### Chapter Four: Pattern Recognition

- Their work benetted from a
certain amount of introspection about how humans solve problems. Yet, many
of our mental abilities are beyond our power of introspection. We don't know
how we recognize speech sounds, read cursive script, distinguish a cup from a
plate, or identify faces. We just do these things automatically without
thinking about them. Lacking clues from introspection, early researchers
interested in automating some of our perceptual abilities based their work
instead on intuitive ideas about how to proceed, on networks of simple models
of neurons, and on statistical techniques.
- In this chapter, I'll describe work during the 1950s and 1960s on what is
called \pattern recognition." This phrase refers to the process of analyzing an
input image, a segment of speech, an electronic signal, or any other sample of
data and classifying it into one of several categories.
- It was termed \series-coupled" because the
output of each neural element fed forward to neural elements in a subsequent
layer. In more recent terminology, the phrase \feed-forward" is used instead of
\series-coupled." In contrast, a \cross-coupled" perceptron could have the
outputs of neural elements in one layer be inputs to neural elements in the
same layer. A \back-coupled" perceptron could have the outputs of neural
elements in one layer be inputs to neural elements in lower numbered layers.
- It is an example in which the original image is
divided into overlapping subimages, each of which is independently processed.
As I'll mention later, overlapping subimages play a prominent role in some
computational models of the neocortex.
- Approaches to AI problems involving neural networks and statistical
techniques came to be called \nonsymbolic" to contrast them with the
\symbol-processing" work being pursued by those interested in proving
theorems, playing games, and problem solving. These nonsymbolic approaches
found application mainly in pattern recognition, speech processing, and
computer vision.

### Chapter Five: Early Heuristics Programs

- To constrain what was later called \the
combinatorial explosion" of transformations, Newell and Simon suggested
using \heuristics" to generate only those transformations guessed as likely to
be on the path to a solution.
- They wrote \It is often argued that a careful line must be drawn
between the attempt to accomplish with machines the same tasks that humans
perform, and the attempt to simulate the processes humans actually use to
accomplish these tasks. . . . GPS maximally confuses the two approaches - with
mutual benefit."
- The program then attempted to reduce this dierence by
applying some symbol-manipulating \operator" (known to be relevant to this
dierence) to the initial symbol structure. Newell and Simon called this
strategy \means{ends analysis." (Note the similarity to feedback control
systems, which continuously attempt to reduce the dierence between a
current setting and a desired setting.)
- Do people use subprograms and recursion in their own thinking? Quite
possibly, but their ability to recall how to resume what some higher level
thought process was doing when that process starts up a chain of lower level
processes is certainly limited. I don't believe that GPS attempted to mimic
this limitation of human thinking.

### Chapter Six: Semantic Representations
- Began to employ more
complex symbol structures in programs for performing various intellectual
tasks. Because of their rich, articulated content of information about their
problem topic, these structures were called semantic representations.
- Because Raphael wanted his system to communicate with people, he
wanted its input and output languages to be \reasonably close to natural
English." He recognized that \the linguistic problem of transforming natural
language input into a usable form will have to be solved before we obtain a
general semantic information retrieval system." This \linguistic problem" is
quite dicult and still not \solved" even though much progress has been made
since the 1960s.
- According to Quillian, the meaning of a term is represented by its place in
the network and how it is connected to other terms. This same idea is used in
dictionaries where the meaning of a word is given by mentioning the
relationship of this word to other words. The meanings of those other words
are, in turn, given by their relationships to yet other words. So we can think of
a dictionary as being like a large semantic network of words linked to other
words.
- Suppose that a person were asked to state everything he knows
about the concept \machine." . . . This information will start o
with the more \compelling" facts about machines, such as that
they are usually man-made, involve moving parts, and so on, and
will proceed \down" to less and less inclusive facts, such as the fact
that typewriters are machines, and then eventually will get to
much more remote information about machines, such as the fact
that a typewriter has a stop which prevents its carriage from 
ying
o each time it is returned. We are suggesting that this
information can all usefully be viewed as part of the subject's
concept of \machine."
- Quillian's model differs from some later semantic networks in that it does
not have a predetermined hierarchy of superclasses and subclasses. As Quillian
puts it, \every word is the patriarch of its own separate hierarchy when some
search process starts with it. Similarly, every word lies at various places down
within the hierarchies of (i.e., is an ingredient in) a great many other word
concepts, when processing starts with them."
- Like artificial neural networks, information is stored in the links.

### Chapter Seven: Natural Language Processing
- Linguists and others who study language recognize several levels at which
language can be analyzed. These levels can be arranged in a sort of hierarchy,
starting with those dealing with the most basic components of language
(sounds and word parts) and proceeding upward to levels dealing with
sequences of sentences. If speech is being dealt with, there are the levels of
phonetics (language sounds) and phonology (organization of sounds into
words). For both speech and text, morphology deals with how whole words are
put together from smaller parts. For example, \walking" consists of \walk"
plus \-ing."
- Next, syntax is concerned with sentence structure and grammar. It
attempts to describe rules by which a string of words in a certain language can
be labeled either grammatical or not. For example, the string \John hit the
ball" is grammatical but the string \ball the hit John" is not. Together with
the dictionary denitions of words, syntax comes next in importance for
understanding the meaning of a sentence. For example, the sentence \John
saw the man with a telescope" has two dierent meanings depending on its
syntactic structure (that is, depending on whether \with a telescope" refers to
\the man" who had a telescope or to \saw.")
- But grammaticality alone is insucient for determining meaning. For
example, the sentence \Colorless green ideas sleep furiously" might be
considered grammatical, but it is nonsensical. The semantics level helps to
determine the meaning (or the meaninglessness) of a sentence by employing
logical analyses. For example, through semantic analysis, an \idea" can't be
both \colorless" and \green."
- One of the factors leading Bar-Hillel to his negative conclusions was the
apparent diculty of giving computers the \world knowledge" they would
need for high-quality translation.

### Chapter Eight: 1960s' Infrastructure
- The technical developments during the 1960s were aided (indeed, one might
say made possible) by several systems support and societal factors. New
computer languages made it much easier to build AI systems. Researchers
from mathematics, from cognitive science, from linguistics, and from what soon
would be called \computer science" came together in meetings and in newly
formed laboratories to attack the problem of mechanizing intelligent behavior.
In addition, government agencies and companies, concluding that they had an
important stake in this new enterprise, provided needed research support.
- Since their early days, the groups at CMU, MIT, and Stanford have been
among the leaders of research in AI. Often graduates of one of these
institutions became faculty members of one of the other ones.
- McCarthy's view about all of this is that \IBM thought
that articial intelligence [that machines were as smart as people] was bad for
IBM's image. . . This may have been associated with one of their other image
slogans, which was `data processing, not computing.'"
- By the mid-1960s AI was well prepared for further advances. Flushed with
early successes it was poised to make rapid progress during the rest of the
1960s and 1970s. Indeed, many people made enthusiastic predictions. For
example, in a 1957 talk16 Herb Simon predicted that within ten years \a
digital computer will be the world's chess champion unless the rules bar it
from competition." He made three other predictions too. Within ten years
computers would compose music, prove a mathematical theorem, and embody
a psychological theory as a program. He said \it is not my aim to surprise or
shock you. . . but the simplest way I can summarize is to say that there are now
in the world machines that think, that learn and that create. Moreover, their
ability to do these things is going to increase rapidly until { in a visible future
{ the range of problems they can handle will be coextensive with the range to
which the human mind has been applied."17 Later Simon said that his
predictions were part of an attempt \to give some feeling for what computers
would mean" to society.
- Even so, what had already been accomplished was an impressive start.
More important perhaps than the specific demonstrations of intelligent
behavior by machines was the technical base developed during the 1950s and
early 1960s. AI researchers now had the means to represent knowledge by
encoding it in networks, as logical formulas, or in other symbol structures
tailored to specific problem areas. Furthermore, they had accumulated
experience with heuristic search and other techniques for manipulating and
using that knowledge. Also, researchers now had new programming languages,
IPL, LISP, and POP-2, that made it easier to write symbol-processing programs.
Complementing all of this symbol-processing technology were neural networks
and related statistical approaches to pattern recognition. These technical
assets, along with the organizational and financial ones, provided a solid base
for the next stage of AI's development.

## Part Three: Efflorescence: Mid-1960s to Mid-1970s

---

### Chapter Nine: Computer Vision

- Most computer vision work is based on processing
two-dimensional images gathered from a three-dimensional world { images
gathered by one or more television cameras, for example. Because the images
are two-dimensional projections of a three-dimensional scene, the imaging
process loses information. That is, dierent three-dimensional scenes might
produce the same two-dimensional image. Thus, the problem of reconstructing
the scene faithfully from an image is impossible in principle.
- Yet, people and other animals manage very well in a three-dimensional
world. They seem to be able to interpret the two-dimensional images formed
on their retinas in a way that gives them reasonably accurate and useful
information about their environments.

### Chapter Ten: "Hand-Eye" Research

- McCarthy later told me that he got
interested in robots because of his interest in computer vision. He was not
very excited about the work in pattern recognition { it was \discrimination"
rather than \description." \If you want to pick something up, you have to
describe it not merely recognize it."
- Mostly about robots which I'm not interested in

### Chapter Eleven: Knowledge Representation and Reasoning

- For a system to be intelligent, it must have knowledge about its world and the
means to draw conclusions from, or at least act on, that knowledge. Humans
and machines alike therefore must have ways to represent this needed
knowledge in internal structures, whether encoded in protein or silicon.
Cognitive scientists and AI researchers distinguish between two main ways in
which knowledge is represented: procedural and declarative.
- The use of resolution, like that of any inference rule, to deduce some specic
conclusion from a large body of logical statements involves the need to decide
to which two statements, among the many possibilities, the rule should be
applied. Then a similar decision must be made again and again until, one
hopes, nally the desired conclusion is obtained. So just as with programs for
playing checkers, solving puzzles, and proving geometry theorems, deduction
programs are faced with the need to try many possibilities in their search for a
solution. As with those other programs, various heuristic search methods have
been developed for deduction programs.
- Semantic networks were (and still are) another important format for
representing declarative knowledge. I have already mentioned their use by
Ross Quillian as a model of human long-term memory. In the 1970s, Stanford
cognitive psychologist Gordon Bower (1932 and his student John Anderson
 presented a network-based theory of human memory in their book
Human Associative Memory. According to a biographical sketch of
Anderson, the book \immediately attracted the attention of everyone then
working in the eld. The book played a major role in establishing
propositional semantic networks as the basis for representation in memory and
spreading activation through the links in such networks as the basis for
retrieval of information from memory."
- The basis of Schank's work was his belief
that people transform natural language sentences into \conceptual structures"
that are independent of the particular language in which the sentences were
originally expressed. These conceptual structures, he claimed, were how the
information in sentences is understood and remembered. So, for example,
when one translates a sentence from one language into another, one rst
represents its information content as a conceptual structure and then uses that
structure to reason about what was said or to regenerate the information as a
sentence in another language. As he put it in one of his papers, \. . . any two
utterances that can be said to mean the same thing, whether they are in the
same or dierent languages, should be characterized in only one way by the
conceptual structures."
- Frame systems accommodated a style of reasoning in which details \not
specically warranted" could be assumed, thus \bypassing \logic," as Minsky
would have it. This style was already used earlier in Raphael's SIR system (see
p. 134), and researchers advocating the use of logical languages for knowledge
representation would later extend logic in various ways to accommodate this
style also. Even so, the last section (titled \Criticism of the Logistic
Approach") of Minsky's paper about frames gives many reasons why one might
doubt (along with Minsky) \the feasibility of representing ordinary knowledge
eectively in the form of many small, independently `true' propositions."

### Chapter Twelve: Mobile Robots

- A* came out of trying to find the shortest path for mobile robots
- Skimmed most of it due to it being on hardware/robots

### Chapter Thirteen: Progress in Natural Language Processing

- W. John Hutchins, who has written extensively about the history of machine
translation (MT), has called the period 1967 to 1976, \the quiet decade."1
Inactivity in the eld during this period is due in part to the ALPAC report,
which, as I have already said, was pessimistic about the prospects for machine
translation. Hutchins claimed \The in
uence of the ALPAC report was
profound. It brought a virtual end to MT research in the USA for over a
decade and MT was for many years perceived as a complete failure. . . . The
focus of MT activity switched from the United States to Canada and to
Europe."
- How well does Systran translate? It all depends on how one wants to
measure performance. Margaret Boden mentions two measures, namely,
\intelligibility" and \correctness." Both of these measures depend on human
judgement. For the rst, one asks \Can the translation be generally
understood?" For the second, one asks \Do human `post-editors' need to
modify the translation?"
- If we really want computers to understand us, we need to give
them ability to use more knowledge. In addition to a grammar of
the language, they need to have all sorts of knowledge about the
subject they are discussing, and they have to use reasoning to
combine facts in the right way to understand a sentence and to
respond to it. The process of understanding a sentence has to
combine grammar, semantics, and reasoning in a very intimate
way, calling on each part to help with the others.
- The success of SHRDLU fueled a debate among AI researchers
about the pros and cons of these two knowledge representation strategies {
procedural versus declarative.

### Chapter Fourteen: Game Playing

- [A human] uses prodigious amounts of knowledge in the
pattern-recognition process [to decide on a good maneuver] and a
small amount of calculation to verify the fact that the proposed
solution is good in the present instance. . . . However, the computer
would make the same maneuver because it found at the end of a
very large search that it was the most advantageous way to
proceed out of the hundreds of thousands of possibilities it looked
at.
- Berliner summed up the dierence by saying that \The basis of human
chess strength, by contrast [with computers], is accumulated knowledge" (my
italics). Specic knowledge about the problem being solved, as opposed to the
use of massive search in solving the problem, came to be a major theme of
articial intelligence research during this period. (Later, however, massive
search regained some of its importance.) Perhaps the most in
uential
proponents of the use of knowledge in problem solving were Edward
Feigenbaum and his colleagues at Stanford. I'll turn next to their seminal
work.

### Chapter Fifteen: The Dendral Project

- An important innovation made during the Dendral project was a
simulation of how a chemical structure would break up in a mass
spectrometer. After HEURISTIC DENDRAL produced some candidate structures
for a particular compound, these structures were subjected to analysis in the
simulated mass spectrometer. The outputs were then compared with the
actual mass spectrometer output. That structure whose simulated
spectrogram was closest to the actual spectrogram was likely to be the actual
structure of the compound. This process of \analysis by synthesis" came to be
widely used in articial intelligence, especially in computer vision.
- We must hypothesize from our experience to date that the problem
solving power exhibited in an intelligent agent's performance is
primarily a consequence of the specialist's knowledge employed by
the agent, and only very secondarily related to the generality and
power of the inference method employed. Our agents must be
knowledge-rich, even if they are methods-poor.
- Embedding the knowledge of experts in AI programs led to the development of
many \expert systems," as we shall see later. It also led to increased
concentration on specic and highly constrained problems and away from
focusing on the general mechanisms of intelligence, whatever they might be.

### Chapter Sixteen: Conferences, Books, and Funding

- During the early years, organization of the
conferences was rather informal, decisions about future conferences being
made by a core group of some of the leaders of the eld who happened to show
up at organizing meetings. At the 1971 meeting in London, I left the room for
a moment while people were discussing where and when to hold the next
conference. When I returned, I was informed that I had been selected to be
the \czar" of the next meeting { to be held at Stanford University in 1973.
- As the eld began to develop its techniques and methods, graduate
courses in articial intelligence were oered at some universities. Accordingly,
some of us who were teaching these courses thought it would be worthwhile to
write or edit books about AI. In 1963, Edward Feigenbaum and Julian
Feldman, then assistant professors at UC Berkeley, published a collection of
early AI and cognitive science papers that had previously appeared in many
dierent places. The volume was called Computers and Thought and was
required reading for early students of AI (including me).2 As Feigenbaum
wrote in the 1995 edition, \Some of the papers are as important today for
their fundamental ideas as they were in the late 1950s and early 1960s when
they were written. Others are interesting as early milestones of elds that
have expanded and changed dramatically."
- Each workshop
resulted in a book with the title Machine Intelligence N, where N denotes the
workshop and volume number.9 The last few volumes have been published
online by the Electronic Transactions on Articial Intelligence.10 These books
contain some of the most cited and important papers in the early history of
the eld.
- Lighthill's report, titled \Articial
Intelligence: A General Survey," somewhat idiosyncratically divided AI
research into three categories, namely, advanced automation, computer-based
studies of the central nervous system, and the bridges in between. He called
these categories A, C, and B, respectively. Although he came out in favor of
continued work in categories A and C, he was quite critical of most AI basic
research, including robotics and language processing, which he lumped into
category B. He wrote that \In no part of the eld have the discoveries made so
far produced the major impact that was then [around 1960] promised." He
concluded that AI's existing search techniques (which worked on toy
problems) would not scale to real problems because they would be stymied by
the combinatorial explosion.12
- Lighthill's report resulted in a substantial curtailment of AI research in
the United Kingdom. In particular, one of its casualties was work on
FREDDY the robot and other AI work under Donald Michie at Edinburgh.

## Part Four: Applications and Specializations: 1970s to Early 1980s

---

### Chapter Seventeen: Speech Recognition and Understanding Systems

- In discussing the problem of computer processing of speech, it is
important to make some distinctions. One involves the dierence between
recognizing an isolated spoken word versus processing a continuous stream of
speech. Most AI research has concentrated on the second and harder of these
problems. Another distinction is between speech recognition and speech
understanding.
- Understanding speech is more dicult than understanding text because
there is the additional problem of processing the speech waveform to extract
the words being uttered.
- In general, phones are the sounds that correspond to vowels or
consonants. English speech is thought to be composed of forty or so dierent
phones. Special alphabets have been devised to represent phones. One is the
International Phonetic Alphabet (IPA), which contains the phones of all
known languages. IPA uses several special characters that do not have
standard computer (ASCII) codes.
- Early speech recognition systems attempted rst to segment the speech
waveform into its constituent phones and then to assemble the phones into
words. To do so, the speech signal was rst digitized, and various parameters,
such as the frequency or pitch, were extracted. The ways in which the values
of these parameters change in time were used to segment the waveform into
units containing phones. Using dictionaries that associate the values of
waveform parameters with phones and phones with words, the waveform was
nally converted into text. The process sounds simple but it is actually quite
complex because, among other things, the beginnings and endings of spoken
words and their component phones overlap in complex patterns, and people
often pronounce the same words in dierent ways.
- DRAGON introduced powerful new techniques for speech processing {
elaborations of which are used in most modern speech recognition systems. It
used statistical techniques to make guesses about the most probable strings of
words that might have produced the observed speech signal. It was an early
example of the importation of probabilistic representations and associated
computational methods into AI. We'll see a good deal more of these in later
chapters.
- DRAGON combined these separate levels into a network consisting of a
hierarchy of probabilistic functions of Markov processes. Entities representing
segments of the speech waveform were at the bottom, entities representing
phones were in the middle, and entities representing words were at the top. At
each level, Bayes's rule was used to compute probabilities of the x's given the
y's. Because only the speech waveform at the bottom level was actually
observed, the phones and words were said to be \hidden." For this reason, the
entire network employed hidden Markov models (HMMs). DRAGON was the
rst example of the use of HMMs in AI. They had been developed previously
for other purposes.
- The transcription of spoken sentences to their textual equivalents is now
largely a solved problem. For example, high-quality speech recognition is
commonly employed today in many automated telephone response systems.
However, understanding natural language speech (or text) to permit general
dialogs with computer systems, for example, remains a long-term research
problem.

### Chapter Eighteen: Consulting Systems

- Speaker 1: Why did John take the pump apart?
- Speaker 2: He did it to x it.
- Interpreting the referents of the italicized words in the second sentence is
aided by referring to the task context established by the first sentence. \He"
refers to John, \did it" refers to the disassembly task, and the second \it"
refers to the pump. TDUS makes extensive use of the shifting \context" and
goals of the dialog.
- The 0.6 in this rule is meant to measure the expert's \degree of belief" in
or \certainty" about the conclusion. Shortlie thought that a degree of belief
was not the same as a probability assessment because, among other things, he
noted that the experts who provided Rule 036 did not necessarily think that
the probability of the organism not being bacteroides would be 0.4.
- Thus, it became common to divide the
program into two parts, namely, the \inference engine" for applying rules and
the \knowledge base" of rules. In principle, new rules could be added without
having to change the inference engine. This division is shown in Fig. 18.5.
This separation suggests that one could construct expert systems for other
applications simply by replacing the medical knowledge with some other
knowledge base without having to change the inference engine.
- Researchers soon discovered that a minor variation of the certainty factors
used by MYCIN and EMYCIN was equivalent to using probabilities instead.
This linkage to probability theory implied consequences that neither MYCIN
nor EMYCIN could escape. In particular, their reasoning was consistent with
probability theory only under some rather restrictive assumptions about how
rules were used. As Russell and Norvig point out, if these assumptions aren't
met \certainty factors could yield disastrously incorrect degrees of belief
through overcounting of evidence. As rule sets became larger, undesirable
interactions between rules became more common, and practitioners found that
the certainty factors of many other rules had to be `tweaked' when more rules
were added."16 Modern methods use more sophisticated probabilistic
techniques, as we shall see in a later chapter.

### Chapter Nineteen: Understanding Queries and Signals

### Chapter Twenty: Progress in Computer Vision

### Chapter Twenty-One: Boomtimes

## Part Five: "New-Generation" Projects

---

### Chapter Twenty-Two: The Japanese Create a Stir

### Chapter Twenty-Three: DARPA's Strategic Computing Program

## Part Six: Entr'acte

---

### Chapter Twenty-Four: Speed Bumps

### Chapter Twenty-Five: Controversies and Alternative Paradigms

## Part Seven: The Growing Armamentarium: From the 1980s Onward

---

### Chapter Twenty-Six: Reasoning and Representation

### Chapter Twenty-Seven: Other Approaches to Reasoning and Representation

### Chapter Twenty-Eight: Bayesian Networks

### Chapter Twenty-Nine: Machine Learning

### Chapter Thirty: Natural Languages and Natural Scenes

### Chapter Thirty-One: Intelligent System Architectures

## Part Eight: Modern AI: Today and Tomorrow

---

### Chapter Thirty-Two: Extraordinary Achievements

### Chapter Thirty-Three: Ubiquitous Artificial Intelligence

### Chapter Thirty-Four: Smart Tools

### Chapter Thirty-Five: The Quest Continues
