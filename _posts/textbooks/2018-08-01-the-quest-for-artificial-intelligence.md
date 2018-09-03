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

- Of course, in basic research, although one can describe generally the
problems one is trying to solve, one can't describe (ahead of time) what the
solutions are going to be. In fact, as exploratory research progresses, new
problems become apparent, so one can't even describe all the problems ahead
of time. One can't make the kind of detailed plan for basic research that one
can make for applying already developed technology to specic applications.
Unfortunately, the management of DARPA was shifting from people who
understood how to initiate and manage basic research to people who knew
how to manage technology applications.

### Chapter Twenty: Progress in Computer Vision

- Most early visual processes extract information about the visible
surfaces directly, without particular regard to whether they happen
to be part of a horse, or a man, or a tree. . . . As for the question of
what additional knowledge should be brought to bear, general
knowledge must be enough { general knowledge embedded in the
early visual processes as general constraints, together with the
geometrical consequences of the fact that the surfaces co-exist in
three-dimensional space.

### Chapter Twenty-One: Boomtimes

- Even though the Manseld Amendment and the Lighthill report caused
diculties for basic AI research during the 1970s, the promise of important
applications sustained overall funding levels from both government and
industry. Excitement, especially about expert systems, reached a peak during
the mid-1980s.
- The boom continued with Japan's \Fifth Generation Computer Systems"
project. That project in turn helped DARPA justify its \Strategic Computing
Initiative." It also helped to provoke the formation of similar research eorts in
Europe (such as the ALVEY Project in the United Kingdom and the European
ESPRIT programme) as well as the formation of American industrial consortia
for furthering advances in computer hardware. Assessments of some of AI's
diculties and achievements, compared to some of its promises, led to the end
of the boom in the late 1980s { causing what some called an \AI winter." I'll
be describing all of these topics in subsequent chapters.

## Part Five: "New-Generation" Projects

---

### Chapter Twenty-Two: The Japanese Create a Stir

- In 1982, Japan's Ministry of International Trade and Industry (MITI)
launched a joint government and industry project to develop what they called
\Fifth Generation Computer Systems" (FGCS). Its goal was to produce
computers that could perform AI-style inferences from large data and
knowledge bases and communicate with humans using natural language. As
one of the reports about the project put it, \These systems are expected to
have advanced capabilities of judgement based on inference and
knowledge-base functions, and capabilities of 
exible interaction through an intelligent interface function."
- The phrase \Fifth Generation" was meant to emphasize dramatic
progress beyond previous \generations" of computer technology. The rst
generation, developed during and after World War II, used vacuum tubes.
Around 1959, transistors replaced vacuum tubes { giving rise to the second
generation { although the transistors, like the vacuum tubes before them, were
still connected to each other and to other circuit components using copper
wires. During the 1960s, transistors and other components were fabricated on
single silicon wafer \chips," and the several chips comprising a computer were
connected together by wires. Computers using this so-called small-scale
integration (SSI) technology comprised the third generation. In the late 1970s,
entire microprocessors could be put on a single chip using \very large-scale
integration" (VLSI) technology { the fourth generation. The Japanese fth
generation, besides its sophisticated software, was to involve many parallel
processors using \ultra large-scale integration" (ULSI).
- Many observers think that most of the results of the FGCS project are
now of historical interest only. The software developed did not nd notable
applications. Improvements in the speed and power of commercial
workstations (and even of personal computers) made these superior to the
PIMs.
- According to Oakley, \If the Lighthill
Report of the early 1970s was paradise lost for the AI community, the Alvey
Report of the early 1980s was paradise regained."

### Chapter Twenty-Three: DARPA's Strategic Computing Program

- DARPA should sponsor a major research and
development program that would integrate eorts in all of these areas to
create much more powerful computer systems. At the same time, there was
concern that the Japanese FGCS program could threaten U.S. leadership in
computer technology. With these factors as background, Kahn began planning
what would come to be called the \Strategic Computing" (SC) program.
- Robert Kahn and the architects of SC believed in 1983 [after the
expert systems boom] that AI was ripe for exploitation. It was
nally moving out of the laboratory and into the real world. . . AI
would become an essential component of SC; expert systems would
be the centerpiece. [They] would allow machines to \think."
- Most commentators doubt that the SC program achieved its goal of
pulling new AI technology into the SC applications. Developing the kinds of
capabilities envisioned by the SC applications required AI inventions, and the
atmosphere needed for invention is not conducive to tightly programmed
milestone demonstrations. Instead, as Roland comments, the \applications
extemporized ad-hoc, o-the-shelf solutions to meet demonstration
deadlines."

## Part Six: Entr'acte

---

### Chapter Twenty-Four: Speed Bumps

- One of the best chapters in this textbook.
- There have been naysayers from the earliest days of articial intelligence. Alan
Turing anticipated (and dealt with) some of their objections in his 1950 paper.
In this chapter, I'll recount some of the controversies surrounding AI {
including some not foreseen by Turing. I'll also describe some formidable
technical diculties confronting the eld. By the mid-1980s or so, these
diculties had caused some to be rather dismissive about progress up to that
time and pessimistic about the possibility of further progress. For example, in
wondering about the need for a special issue of the journal Ddalus devoted to
AI in 1988, the philosopher Hilary Putnam wrote1 \What's all the fuss about
now? Why a whole issue of Ddalus? Why don't we wait until AI achieves
something and then have an issue?"
The attacks and expressions of disappointment from outside the eld
helped precipitate what some have called an \AI winter."
- No one supposes that computer simulations of a ve-alarm re will
burn the neighborhood down or that a computer simulation of a
rainstorm will leave us all drenched. Why on earth would anyone
suppose that a computer simulation of understanding actually
understood anything? . . . For simulation, all you need is the right
input and output and a program in the middle that transforms the
former into the latter. That is all the computer has for anything it
does. To confuse simulation with duplication is the same mistake,
whether it is pain, love, cognition, res, or rainstorms.
- According to Quillian, the meaning of a term is represented by its
place in the network and how it is connected to other terms. This
same idea is used in dictionaries where the meaning of a word is
given by mentioning the relationship of this word to other words.
The meanings of those other words are, in turn, given by their
relationships to yet other words. So we can think of a dictionary as
being like a large semantic network of words linked to other words.
- \We do not know the
equations describing the physical processes in the brain, and even if we did,
the solution of the equations describing the simplest reaction would take a
prohibitive amount of time." The summary of his paper concluded with
\Signicant developments in articial intelligence. . .must await an entirely
dierent sort of computer. The only existing prototype for it is the
little-understood human brain."
- In addition to concerns about AI's \overstated claims," many computer
scientists thought AI to be a kind of \fringe activity" that did not adhere to
rigorous scientic standards and a eld that housed charlatans. I recall that
when I rst interviewed for a position at SRI in 1961, I was warned by one
researcher there against joining research on neural networks. Such research, he
claimed, was \premature," and my involvement in it could damage my
reputation.
- Concern for \respectability" has had, I think, a stultifying eect on some
AI researchers. I hear them saying things like, \AI used to be criticized for its
flossiness. Now that we have made solid progress, let us not risk losing our
respectability." One result of this conservatism has been increased
concentration on \weak AI" { the variety devoted to providing aids to human
thought { and away from \strong AI" { the variety that attempts to
mechanize human-level intelligence. This is too bad, because, although I think
the goals of weak AI are important and worthy, building an artifact that
mimics the abilities of the human brain would be a tremendous scientic
achievement { well worth the risk and not at all an \obscenity," \evil,"
\hideous," nor \impossible in principle."
- One of the reasons why expert systems are brittle is that they lack
\common sense."45 In addition to the expert knowledge that humans might
acquire through education and professional experience, they also have a lot of
general knowledge. They know, for example, that only females can become
pregnant, that umbrellas protect against sun and rain, that certain birds
migrate, that food can be purchased in markets, and millions upon millions of
other facts. Benjamin Kuipers, an AI researcher and professor at the
University of Michigan (formerly at the University of Texas at Austin), dened
common sense this way: \Commonsense knowledge is knowledge about the
structure of the external world that is acquired and applied without
concentrated eort by any normal human that allows him or her to meet the
everyday demands of the physical, spatial, temporal and social environment
with a reasonable degree of success."
- It seems to me that the knowledge of any particular human should be
thought of as an ever-growing tree whose base and lower branches comprise
\common sense" and whose upper ramications comprise the \expertise" of
specialized disciplines that the person might have learned. The tree metaphor
is also useful in emphasizing the point that the knowledge in the upper
branches uses concepts that occur in the trunk and lower branches.
- During the early 1980s, many AI sponsors, in government and in industry, had
greatly in
ated expectations of what AI could do. Undoubtedly, some of the
blame for their unjustied optimism could be placed on AI researchers
themselves who were motivated to make exaggerated promises. The failure to
deliver systems matching these unrealistic hopes, together with the
accumulating critical commentary that I have already mentioned, combined in
the mid- to late 1980s to bring on what came to be called an \AI winter."

### Chapter Twenty-Five: Controversies and Alternative Paradigms

- Frustrated with AI's
slowdown, people with dierent approaches to AI eagerly stepped forward to
claim that what AI needed was more of this or that alternative to AI's
reigning paradigm { the paradigm John Haugeland called \good-old-fashioned
AI" or GOFAI. GOFAI, of course, had as its primary rationale Newell and
Simon's belief that a \physical symbol system has the necessary and sucient
means for intelligent action." But GOFAI seemed to be running out of steam
during the 1980s, making it vulnerable to challenges by AI researchers
themselves { challenges that had to be taken more seriously than those of
Searle, Dreyfus, Penrose, and others outside of the eld.
- Another objection to the use of logical representations was based on the fact
that logical sentences must be either true or false whereas so much of human
knowledge is uncertain.
- Zadeh points out that his truth values and set membership values cannot
be construed as probabilities. His reasons need not concern us here; in any
case, the matter is controversial. (Most statisticians claim that probability
theory is the only mathematically rigorous way to deal with uncertainty.)
- The brain's functions simply aren't based on any small set of
principles. Instead, they're based on hundreds or perhaps even
thousands of them. In other words, I'm saying that each part of
the brain is what engineers call a kludge - that is, a jury-rigged
solution to a problem, accomplished by adding bits of machinery
wherever needed, without any general, overall plan: the result is
that the human mind - which is what the brain does - should be
regarded as a collection of kludges. The evidence for this is
perfectly clear: If you look at the index of any large textbook of
neuroscience, you'll see that a human brain has many hundreds of
parts - that is, subcomputers - that do dierent things. Why do
our brains need so many parts? Surely, if our minds were based on
only a few basic principles, we wouldn't need so much complexity.
- Of course, just because the brain is a kludge does not mean that
computer intelligences have to be. Nevertheless, some AI researchers favored
systems consisting of collections of experimentally derived, ad hoc routines
designed to solve specic problems. These people called themselves \scrues"
to distinguish themselves from the \neats" who favored programs based on
theoretically based principles.
- Because apparently the brain does what it does by massive parallel
computations implemented by networks of interconnected neurons, some
people began anew to explore the possibilities of neural networks. During the
late 1970s a group at the University of California at San Diego (UCSD)
headed by cognitive psychologists David E. Rumelhart (1942{ ) and James L.
McClelland (1948{ ) (Fig. 25.3) began a study of networks that they called
\parallel distributed processing" (PDP) systems. The group came to be
known as the PDP group.
- As
Rumelhart later pointed out, \The common theme to all these eorts has been
an interest in looking at the brain as a model of a parallel computational
device very dierent from that of a traditional serial computer."
- Much of the neural network research during this period came to be called
\connectionist" or \brain-style" computation, to contrast it with GOFAI.
- As he puts it, \Virtually all problems
in articial intelligence, machine learning, adaptive systems, and automated
learning can be recast as a search for a computer program. Genetic
programming provides a way to successfully conduct the search for a computer
program in the space of computer programs."

## Part Seven: The Growing Armamentarium: From the 1980s Onward

---

### Chapter Twenty-Six: Reasoning and Representation

- Those AI researchers called logicists, who favor the use of logical languages for
representing knowledge and the use of logical methods for reasoning,
acknowledge one problem with ordinary logic; namely, it is monotonic. By
that they mean that the set of logical conclusions that can be drawn from a
set of logical statements does not decrease as more statements are added to
the set. If one could prove a statement from a given knowledge base, one could
still prove that same statement (with the very same proof!) when more
knowledge is added.
- Yet, much human reasoning does not seem to work that way { a fact well
noticed (and celebrated) by AI's critics. Often, we jump to a conclusion using
the facts we happen to have, together with reasonable assumptions, and then
have to retract that conclusion when we learn some new fact that contradicts
the assumptions. That style of reasoning is called nonmonotonic or defeasible
(meaning \capable of being made or declared null and void") because new
facts might require taking back something concluded before.
- We humans are also able to predict, with useful accuracies, the future
course of many of the physical processes we commonly experience. For
example, when people play in ocean waves at the beach, they are usually able
to predict when a wave crest will arrive so that they can jump up in time. Do
our brains use anything like the equation just shown to make that prediction?
Probably not. Instead, prediction routines for guiding skilled actions are
learned by repeated experiences and are part of what psychologists call
\procedural knowledge."
- In addition to acting automatically and eectively using procedural
knowledge embedded in our various motor skills, we can also make declarative
statements predicting what will happen in certain situations. For example, a
surfer looking out at incoming waves can tell a friend \Take the next wave; it's
going to be a big one."7 Apparently we have some facility for representing and
using \qualitative knowledge" about physical processes { knowledge that is
neither part of our procedural \muscle memory" nor represented in our brains
by complex mathematical formulas. I could give several examples. How do we
know that when we knock over a glass of water on a table the water will
eventually come to the edge of the table and spill o? How do we know that if
we stack heavy boxes on top of light, fragile boxes, the fragile boxes might
collapse? How do we know that if we drive to our destination a little bit
faster, we'll get there a little bit sooner?
- Earlier in AI's history there was controversy about whether knowledge should
be represented by data structures such as semantic networks (encoded, say, as
frames) or by sets of logical statements. Gradually the controversy moderated
because researchers came to accept the idea that semantic networks could be
thought of as a special way of representing certain kinds of logical statements,
thereby permitting some deductions to be made directly from the network.
- decided to undertake the immense task of providing computers
with common-sense knowledge. (See Fig. 26.5.) The rst step, he thought,
would be to \prime the pump with the millions of everyday terms, concepts,
facts, and rules of thumb" that comprise common sense.

### Chapter Twenty-Seven: Other Approaches to Reasoning and Representation

- No notes because it wasn't interesting.

### Chapter Twenty-Eight: Bayesian Networks

- Much human reasoning is about propositions and quantities that are
uncertain. Our beliefs about many things are provisional (that is, subject to
change) and qualied (that is, having various levels of condence). AI systems,
too, need to be able to deal with uncertain information.
- But just as is the case with logical
reasoning, probabilistic reasoning is subject to AI's old nemesis, the
combinatorial explosion. Suppose, for example, that an agent's knowledge
consists of a set of propositions. Because of possible interdependencies among
the propositions, accurate probabilistic reasoning depends on knowing more
than just the probability of each of those propositions individually. Instead,
probability values for various combinations of the propositions taken together,
called \joint probabilities," are usually required; this leads, in the general case,
to impractically large representations and intractable computations.
- One thing that all of these applications has taught us is the importance of
massive amounts of data, which according to Peter Norvig, the co-author of
the leading AI textbook and Director of Research at Google, has turned out to
be the major theme of modern AI.
- The fact that full explanations
involve rather complex mathematics testies again to the great increase in AI's
technical depth that began in the 1980s.

### Chapter Twenty-Nine: Machine Learning

- Most machine learning methods construct hypotheses from data. So (to
use a classic example), if a large set of data contains several instances of swans
being white and no instances of swans being of other colors, then a machine
learning algorithm might make the inference that \all swans are white." Such
an inference is \inductive" rather than \deductive." Deductive inferences
follow necessarily and logically from their premisses, whereas inductive ones
are hypotheses, which are always subject to falsication by additional data.
Still, inductive
inferences, based on large amounts of data, are extremely useful. Indeed,
science itself is based on inductive inferences.
- The usual AI approach to dealing with large quantities of data is to reduce the
amount of it in some way. For example, a neural network is able to represent
what is important about a large amount of training data by the network's
structure and weight values. Similarly, learning a Bayesian network from data
condenses these data into the network's node structure and its conditional
probability tables.
- The basic idea
behind backprop is simple, but the mathematics (which I'll skip) is rather
complicated. In response to an error in the network's output, backprop makes
small adjustments in all of the weights so as to reduce that error. It can be
regarded as a hill-climbing (or rather hill-descending) method { searching for
low values of error over the landscape of weights. But rather than actually
trying out all possible small weight changes and deciding on that set of them
that corresponds to the steepest descent downhill, backprop uses calculus to
precompute the best set of weight changes.
- The decision tree and neural network learning methods described so far in this
chapter are examples of \supervised learning," a type of learning in which one
attempts to learn to classify data from a large sample of training data whose
classications are known. The \supervision" that directs learning in these
systems involves informing the system about the classication of each datum
in the training set. Yet, it is sometimes possible to construct useful
classications of data based just on the data alone. Techniques for doing so
fall under the heading of \unsupervised learning."
- In its simplest setting, reinforcement learning is about learning how to
traverse a collection of states, going from one state to another and so on, to
reach a state in which a reward is obtained. The problem is much like one that
a rat faces in learning how to run a maze (or one that a robot faces in learning
how to carry out a task).
- As in all reinforcement learning procedures, values are gradually propagated backward
from the end of the game toward the starting position.
- To make eective decisions while navigating uncertain
environments, animals must develop the ability to accurately
predict the consequences of their actions. Reinforcement learning
has emerged as a key theoretical paradigm for understanding how
animals accomplish this feat.
- We want it to be
such that the distances (called the \margin") from it to the closest points of
opposite categories are as large as possible. Such a linear boundary is shown
on the right-hand side of Fig. 29.17. The parallel dashed lines on either side
go through these closest points, which are called \support vectors."
Boundaries with margins as large as possible are desirable because they are
better at classifying new points not in the training set. That is, they have
better \generalizing" properties.
- SVMs and kernel machines are superb examples of how work in several
disciplines, using highly technical mathematical apparatus, has contributed to
powerful new techniques in articial intelligence. Important venues for
describing new work in machine learning are the Neural Information
Processing Systems (NIPS) Conferences sponsored annually by the Neural
Information Processing Systems Foundation.

### Chapter Thirty: Natural Languages and Natural Scenes

- Systems that use grammars for
analyzing natural language sentences must use parsing algorithms to search
among candidate \parse trees" to nd one or more that ts an input sentence.
For realistic grammars that \accept" those word strings we think of as legal
sentences and reject those strings we take to be nonsentences, it is often the
case that there are many possible parses, each conveying a dierent meaning.
Choosing one \best" parse tree from among all of these then depends on
semantic and pragmatic analyses, which take into account the context in
which the sentence occurs and common-sense world knowledge.
- This is because people are always
stretching and bending the `rules' to meet their communicative needs."12 This
fact was recognized quite early in the study of language. In his 1921 book, the
linguist and anthropologist Edward Sapir wrote \Unfortunately, or luckily, no
language is tyrannically consistent. All grammars leak."13 Sapir meant, of
course, that any grammar, no matter how complex, will accept some sentences
that people nd unacceptable and reject some that people nd acceptable.
- Eugene Charniak, one of the rst AI researchers who recognized this
diculty, proposed that syntactic analyses should be qualied by probabilities.
Some sentences are \probably" ok, and some are probably not, and there are
all gradations in between.14 An immediate advantage of such an approach is
that the probability of a parse can be used to choose among alternative parses
for ambiguous sentences.
- I believe that one of the potentially most promising developments in computer
vision (and maybe even for all of AI) involves hierarchical models. There are
dierent versions of these models, and dierent ways to construct them, but if
we stand far enough back from the details, they have similar structures and
features.
- Je Hawkins (1957{ ), the designer of the original Palm Pilot, has
suggested that the neocortex is a hierarchical temporal memory whose layers
(from bottom to top) store increasingly abstract representations of sensory
input sequences and whose function (from top to bottom) is to make
increasingly detailed predictions of future experience.43 He proposes that the
visual cortex learns in unsupervised fashion by being subjected to sequences of
images in time. Because we see images as they occur continuously in time,
there are bound to be stretches in which each image is of the same object
moving across our visual eld { albeit appearing at dierent translations,
scales, and orientations. This sameness provides an implicit labeling that is
exploited in learning representations at all levels of the hierarchy. Furthermore,
Hawkins claims, the hierarchical memory and its learning procedures are used
not only for visual input but for other sensory modalities as well. At the
highest levels of the hierarchy these separate modalities combine to give an
integrated model of our sensory world based on vision, touch, and hearing { a
model we use to make predictions about what might be happening next.

### Chapter Thirty-One: Intelligent System Architectures

- One can accomplish such
\parallelism," either by actually having several hardware processors to which
programs are farmed out for execution or by the simulation of parallel
operation on the simpler von Neumann architecture in which the programs are
actually being executed in sequence but the programmers, for all they know,
think of them as running simultaneously.
- James Albus (1935{ ; Fig. 31.4), at the National Institute of Standards
and Technology (formerly the National Bureau of Standards), developed what
he called a \reference model architecture." The architecture consists of
multiple layers of \real-time control systems" (RCSs) developed earlier at
NIST as components of a \theory of intelligence."7 (Albus claims that his RCS
model was originally inspired by a model of the cerebellum that he and David
Marr devised.8) Each RCS \partitions the control problem into four basic
elements: behavior generation (or task decomposition), world modeling,
sensory processing, and (in more recent versions) value judgment. It clusters
these elements into computational nodes that have responsibility for specic
subsystems, and arranges these nodes in hierarchical layers such that each
layer has characteristic functionality and timing."
- There are two types of memory modules in ACT-R. Declarative Memory
consists of facts, such as \Washington, DC is the capital of the United States,
France is a country in Europe, or 2 + 3 = 5." Declarative knowledge is
represented in ACT-R by units called chunks. Procedural Memory consists of
production rules representing \knowledge about how we do things: for
instance, knowledge about how to type the letter `Q' on a keyboard, about
how to drive, or about how to perform addition."49 Often we are unable to
verbalize our knowledge about how we do certain things: We just do them;
thus knowledge about them is considered procedural, not declarative.

## Part Eight: Modern AI: Today and Tomorrow

---

### Chapter Thirty-Two: Extraordinary Achievements

- Does Deep Blue use articial intelligence? The short answer is
\no." Earlier computer designs that tried to mimic human thinking
weren't very good at it. No formula exists for intuition. . . . Deep
Blue relies more on computational power and a simpler search and
evaluation function.
The long answer is [also] \no." \Articial Intelligence" is more
successful in science ction than it is here on earth, and you don't
have to be Isaac Asimov to know why it's hard to design a machine
to mimic a process we don't understand very well to begin with.
How we think is a question without an answer. Deep Blue could
never be a HAL-9000 if it tried. Nor would it occur to Deep Blue
to \try."
- But I have a broader view of AI. Although Deep Blue relied mainly on
brute-force methods rather than on rule-based reasoning (for example), it did
use heuristic search, one of AI's foundational techniques. The dierences
between Kasparov and Deep Blue simply indicate how much better chess
programs would fare if they employed human-chess-playing knowledge and
skills (once these become known well enough to program) and machine
learning methods in addition to brute force.

### Chapter Thirty-Three: Ubiquitous Artificial Intelligence

- First, it is the technology of how to apply knowledge to action to
achieve goals. . . That is what algorithms and programs are all
about { frozen action to be thawed when needed.
The second ingredient is the miniaturization of the physical
systems that have this ability for intelligent action.
Thus, computer technology diers from all other technologies
precisely in providing the capability for an enchanted world
In short, computer technology oers the possibility of
incorporating intelligent behavior in all the nooks and crannies of
our world. With it, we could build an enchanted land.

### Chapter Thirty-Four: Smart Tools

- The goal of the group is
to produce what they call \human-competitive designs," that is, ones whose
specications meet or exceed those of the best human designers. With
expected increases in computer power, I believe that the use of GP and
GP-like search methods will likely produce several interesting new inventions.
- As I hope the past few chapters have demonstrated, some parts of the
quest for articial intelligence have been quite successful. AI has become more
and more a part of all of our lives as well as of those of specialists. But the
main goal of the quest (for some of us at least) still remains, namely, endowing
artifacts with full human (as well as superhuman) capabilities for language,
perception, reasoning, and learning.

### Chapter Thirty-Five: The Quest Continues

- Against this background of prediction successes and failures, I hesitate to
make any that do not seem rather obvious. Except, I will predict that
someday we'll have human-made artifacts with levels of intelligence (in all of
its manifestations) equalling and exceeding that of humans. I make that
prediction because I believe that we humans are machines (for what else could
we be?) and that eventually we'll be able to build machines that can do
whatever we can do because there will be economic as well as scientic reasons
for doing so.
- All AI researchers agree that both common-sense knowledge and specialized
knowledge is the key to intelligence. Various approaches have been pursued to
gather and organize that knowledge in a form exploitable by computer
programs.
- A third approach is to build programs that can read (and understand)
natural language text. After all, as the proponents of that approach claim, the
world is full of knowledge { in books, in news feeds, and on the Web. (Of
course, it is full of a lot of nonsense also, but smart programs may ultimately
be able to highlight the trustworthy parts.) As we have already seen,
computer understanding of natural language text requires both general
common-sense knowledge and background knowledge about the subject matter
of the text. Thus, \Learning by Reading" (LbR), as this third approach is
called, draws on the technologies of knowledge representation and reasoning as
well as on natural language processing.
- In a 1995 article titled \Eye on the Prize" I argued that AI researchers ought
to be putting more eort into developing generally intelligent systems in
addition to their work on the kinds of smart tools I mentioned in the previous
chapter. I suggested that AI ought to focus on building what I called \habile"
systems { ones that could learn to use smart tools, just as humans are able to
learn to use them. More generally, it has always seemed to me that AI's grand
goal { the \prize" we are questing for { should be to develop artifacts that can
do most of the things that humans can do { specically those things that are
thought to require \intelligence." These systems would have what some AI
researchers have called \Human Level Articial Intelligence" (HLAI).
- HLAI was the goal of the founders and of many other early AI
researchers. John McCarthy claims that the \rst scientic discussion of
human level machine intelligence was apparently by Alan Turing" in his
lecture to the London Mathematical Society on Febuary 20, 1947.33 Turing
made the mechanization of human-level intelligence an explicit goal in his 1950
\Computing Machinery and Intelligence" paper. Later, in the proposal for the
1956 Dartmouth Summer Study, John McCarthy wrote \The study is to
proceed on the basis of the conjecture that every aspect of learning or any
other feature of intelligence can in principle be so precisely described that a
machine can be made to simulate it."
- In a 2003 paper,
Edward Feigenbaum concluded \Computational Intelligence is the manifest
destiny of computer science, the goal, the destination, the nal frontier. More
than any other eld of science, our computer science concepts and methods are
central to the quest to unravel and understand one of the grandest mysteries
of our existence, the nature of intelligence. Generations of computer scientists
to come must be inspired by the challenges and grand challenges of this great
quest."34
- Let an ultraintelligent machine be dened as a machine that can
far surpass all the intellectual activities of any man however clever.
Since the design of machines is one of these intellectual activities,
an ultraintelligent machine could design even better machines;
there would then unquestionably be an \intelligence explosion,"
and the intelligence of man would be left far behind. Thus the rst
ultraintelligent machine is the last invention that man need ever
make, provided that the machine is docile enough to tell us how to
keep it under control.
- If articial intelligences can be created at all, there is little reason
to believe that initial successes could not lead swiftly to the
construction of articial superintelligences able to explore
signicant mathematical, scientic, or engineering alternatives at a
rate far exceeding human ability, or to generate plans and take
action on them with equally overwhelming speed. Since man's
near-monopoly of all higher forms of intelligence has been one of
the most basic facts of human existence throughout the past
history of this planet, such developments would clearly create a
new economics, a new sociology, and a new history.
- Other tests have been proposed that could be taken as helping to dene
HLAI. For example, in a 2005 paper, I suggested one, which I called the
\employment test." In that paper, I wrote that to pass the test \programs
must be able to perform the jobs ordinarily performed by humans. Progress
toward human-level AI could then be measured by the fraction of these jobs
that can be acceptably performed by machines." I had in mind all kinds of
jobs that humans get paid to perform { from skilled and unskilled labor to
managerial and oce work.43 For me, achieving HLAI implies (at least)
knowing how to build artifacts that can do what we now pay humans to do.
- Yes, even though we already have AI systems that can do some things
better than humans can do them, there are still many, many human cognitive
skills that we don't yet know how to automate. I believe there are two reasons
why AI researchers will continue to strive to automate these skills. One is
economic: The prospect of someday being able to employ AI systems rather
than more expensive humans (no matter how many humans there might be)
will sustain a strong and irresistible urge to build artifacts that can do what
we now pay humans to do. The other reason is scientic: In their attempts to
understand how the human brain works, people will continue to build
computational models of its many functions. Thus, I think achieving some
version of HLAI will continue to be AI's long-term goal.
- John McCarthy mentions two approaches toward achieving HLAI. One is
to attempt to simulate how the human intellect works, but, as he wrote,
\Understanding the human brain well enough to imitate its
function. . . requires theoretical and experimental success in psychology and
neurophysiology." The other is to write programs that mimic human
intelligent behavior, which is what AI researchers have largely been trying to
do. McCarthy says that \It isn't a question of deciding between them, because
each should eventually succeed; it is more a race."
- I think Minsky was exactly right. We've been trying the alternatives of
\advanced resources, given initially," and simulating \organic evolution."
These approaches have produced smart tools and other useful programs but
not HLAI yet. What about working on a \graded sequence of problems of
growing diculty"? This strategy has been suggested and deserves serious
consideration.
- In his 1950 paper, Alan Turing suggested that \Instead of trying to
produce a programme to simulate the adult mind, why not rather try to
produce one which simulates the child's? If this were then subjected to an
appropriate course of education one would obtain the adult brain. . . ." The
\appropriate course of education" would then correspond to Minsky's \graded
sequence of problems."
- As regards the other approach, namely, \understanding the human brain
well enough to imitate its function," there has been work on that problem too.
Several computer scientists are attempting to use concepts familiar to AI
people to explain the brain. I have already mentioned the hierarchical models
of the cortex proposed by Mumford, Hinton, Hawkins, Dean, and their various
colleagues. Building on features of primitive sensory inputs from an array of
pixels, for example, and ascending through ever-more-abstract percepts, these
models are able to learn to classify images independently of size, translation,
and orientation. Yet, to my knowledge, no work has yet been done to use these
models for more than perception. Can they learn to understand, to reason, to
plan, and to select actions?
- Dharmendra Modha (1969{ ), manager of cognitive computing at IBM's
Almaden Research Center in San Jose, California,48 is among those pursuing a
more \bottom-up" approach. In 2007, Modha's team carried out an historic
experiment in which they constructed a computer simulation of a rat-scale
model of the cortex (with 55 million spiking neurons and 448 billion synapses
with spike-timing-dependent plasticity) that could function in near real-time
using a BlueGene supercomputer with 32,768 processors and 8 TB of main
memory. Modha is the principal investigator of a DARPA project to develop
\Systems of Neuromorphic Adaptive Plastic Scalable Electronics"
(SyNAPSE), or, in plain English, a project whose goal is to build a machine
that mimics the actions of about 100 million neurons. That's twice the
number of neurons in a rat brain but only about 0.25% of the number in a
human brain. One can hope that the top-down and bottom-up approaches will
meet in the middle somewhere.
- Even setting this
nightmare aside, one can fear a variety of more subtle deleterious
impacts, for example, rapid collapse of human society into a
self-destructive pure hedonism once all pressures, and perhaps even
reasons or opportunities, for work and striving are undermined by
the presence of unchallengeably omnicompetent mechanisms.
Certainly man's remaining sense of his own uniqueness may be
further impaired, and he may come to seem in his own eyes little
more than a primitive animal, capable only of 
eeting
enjoyments.
- Omohundro wants to make sure
that we build \wisdom," and not just intelligence, into our technologies. By
that he means building in \human values, such as caring about human rights
and property rights and having compassion for other entities." He thinks it
\absolutely critical that we build these in at the beginning, otherwise we'll get
systems that are very powerful, but which do not support our values."52 I
think Omohundro brings up valid concerns, but to put his version of wisdom
into AI systems we'll rst have to agree on just what we mean by \human
values." That will be tough given that our dierent opinions about values
often lead to wars.
- In any case, we should
continue to pursue many dierent approaches, guided by our best judgments.
It's like heuristic search for a goal that we'll recognize when we achieve it.
- Several disciplines have contributed to AI's successes. As I wrote at the
beginning of this book, the early AI pioneers used many clues about how to
proceed { clues from mathematics and logic, from neuroscience, from
linguistics, from statistics and probability theory, from control engineering,
from psychology, and from computer science. Indeed, the substantial progress
made in the quest for AI to date is due to the use of ideas from all of those
disciplines. No overarching theory of AI has yet emerged, nor is one likely to
in my opinion.
- The quest will continue. What combinations of AI's methods, buttressed
by AI's supporting disciplines, will be used in the intelligent systems of the
future? No one really knows, so we'll have to keep all of them active on AI's
\search frontier." Some of the ones developed early in the quest (and now
perhaps forgotten) might with better technology be useful. Researchers who
want to pursue the quest should be familiar with the full variety of AI's
methods, its contributing disciplines, and (yes) its history.
