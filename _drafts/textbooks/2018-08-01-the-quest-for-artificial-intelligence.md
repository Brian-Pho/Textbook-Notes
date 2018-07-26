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

### Chapter Four: Pattern Recognition

### Chapter Five: Early Heuristics Programs

### Chapter Six: Semantic Representations

### Chapter Seven: Natural Language Processing

### Chapter Eight: 1960s' Infrastructure

## Part Three: Efflorescence: Mid-1960s to Mid-1970s

---

### Chapter Nine: Computer Vision

### Chapter Ten: "Hand-Eye" Research

### Chapter Eleven: Knowledge Representation and Reasoning

### Chapter Twelve: Mobile Robots

### Chapter Thirteen: Progress in Natural Language Processing

### Chapter Fourteen: Game Playing

### Chapter Fifteen: The Dendral Project

### Chapter Sixteen: Conferences, Books, and Funding

## Part Four: Applications and Specializations: 1970s to Early 1980s

---

### Chapter Seventeen: Speech Recognition and Understanding Systems

### Chapter Eighteen: Consulting Systems

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
