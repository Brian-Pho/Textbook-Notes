---
layout: post
title: "The Brain From Inside Out"
date: "2021-06-26"
categories:
  - Books
book_authors: "György Buzsáki"
excerpt: "How our brain doesn't process information, but creates it."
---

## Preface

- Often when we don’t understand something, we make up a word or two for it and pretend that those words solve the mystery.
- None of the major brain projects in the world: BRAIN Initiative in the US, Human Brain Project in Europe, and China Brain Project, make it a priority to understand the general principles of brain function.
- The core argument of this book is that the brain is a self-organized system with preexisting connectivity and dynamics whose main job is to generate actions and to examine and predict the consequences of those actions.
- The author refers to this as the “inside-out” strategy which departs from the dominant framework of mainstream neuroscience.
- The current dominant framework is that the brain perceives, represents, processes, and responds to the world in an “outside-in” way.

## Chapter 1: The Problem

- Where does perception occur in the brain? What initiates my finger movement?
- One reason why we don’t have answers to these questions is because the brain is complicated and our science of it is still in its young phase.
- Many of the unknowns, the true mysteries of the brain, are hidden in the middle; between the sensory receptors and motor effectors.
- Historically, research on the brain has been working its way in from the outside, going from sensation to action, hoping that some day it’ll take us through the middle.
- Whether it be phrenology or neuronal mechanisms, the basic approach has remained the same: to explain how human-constructed ideas relate to brain activity.
- Why would ideas from our predecessors hundreds or thousands of years ago map to the brain?
- We continue to refer to made-up words and concepts and look for their places in the brain by using lesion studies, imaging, and other methods.
- The boundaries between predetermined concepts guide the search rather than the relationships between interactive brain processes.
- The author refers to this approach as “neo-phrenology” or the “outside-in” strategy.
- Instead of explaining the invented terms (many of which date back to William James), we should be explaining the activities of the brain.
- The brain should be treated as an independent variable because behavior and cognition depend on brain activity, not the other way around.
- In the empiricism-inspired model, signals enter the brain from the outside, neuronal circuits process and perceive them, and then some other part of the brain decides whether or not to generate a motor response.
- The emphasis is on perceptual processing, association, and action generation.
- In the outside-in framework, the brain is fundamentally a passive device that perceives, evaluates, and decides whether and how to act. The author disagrees with this framework.
- Most contemporary computational models of brain function also fall under the outside-in framework.
- E.g. Marr’s three levels of analysis (computational, algorithmic, implementation).
- Behaviorism briefly challenged the outside-in framework by focusing on the action side of the sequence but it treated the brain as a black box.
- Stimulus, signal, and reinforcer typically mean different things to an experimenter, but do brains make such distinctions?
- Stimuli: inputs from the environment that arrive to the brain through sensory interfaces. It exerts some change in brain activity because it must stimulate the brain.
- Signal: the brain regards its change in response to the stimulus as important because it conveys something useful.
- Both stimulus and signal refer to a relationship between the outside world and brain activity.
- Conversely, the absence of such a relationship implies that the input doesn’t exist from the brain’s point of view.
- E.g. Many phenomena remain unnoticed by our brains either because we don’t have sensors for them, such as radio waves, or because we don’t attend to them, such as items in our peripheral vision.
- There’s nothing inherent in things/events that turn them into a stimulus/signal, only when they’re noticed by the brain do they become signals.
- Reinforcer: a special type of stimulus that changes an animal’s behavior.
- E.g. Positive or negative reinforcers.
- If something isn’t noticed by the brain, it’s irrelevant from the brain’s point of view; it doesn’t change it’s neuronal activity.
- Perhaps signals and reinforcers mean the same thing: they both convey change and relate the outside world to brain activity.
- Viewed this way, signals and reinforcers represent a scale where the ends are called positive or negative reinforcers while the middle are neutral signals.
- The brain didn’t evolve to represent anything but to help its host body survive and reproduce.
- Brains also produce many effects that don’t correspond to anything tangible in the physical world.
- E.g. Pleasure, fear, desire, color, and feelings.
[Figure 1.2](figure1-2.png)
- The brain isn’t a passive device that associates and fuses signals together to form objects.
- The problem with this outside-in correlational approach is that it doesn’t yield an adequate understand of perception or neuronal computation.
- Brain signals interpreted by an experimenter may not match the brain’s interpretation of those same signals.
- Only action can provide meaning to brain activity.
- There’s a difference between the observer outside the brain, such as the experimenter, and the observer inside the brain, such as the homunculus.
- Typical visual system experiment
    1. An experimenter presents a visual stimulus to a subject.
    2. The image is then converted into APs and conveyed to the primary visual cortex.
    3. The experimenter places a recording devices inside the brain and monitors the neural responses to different stimuli.
    4. The experimenter can then correlate specific features of the presented images and the neuronal responses in the visual cortex, allowing them to guess at the possible input-output transformation rules.
    5. After establishing a correlation (often mistakenly called a neuronal code), the experimenter can recover stimulus properties from the neuronal responses and predict the properties of untested stimuli.
    6. In the end, a particular constellation of neuronal spike patterns becomes information.
- But to whom is that information useful?
- The recorded signals from the brain, combined with a priori knowledge about the stimulus, can only generate meaning to the experimenter, not the subject.
- What about the internal observers, the brain circuits? What do they see?
- They don’t see anything, all they see are spikes.
- Imagine an experimenter that has access to all neurons in the brain and their activity. Without access to information outside the skull, such knowledge can’t reveal what the brain is doing.
- In neural coding terms, the outside-in framework has only shown the decoding of stimulus properties from neural activity only if an observer has the code book (the set of stimulus-response correlations).
- However, the brain doesn’t have such a book; it only has its own neural responses.
- All any neuron in the brain ever sees is that some change happened in its upstream peers, whether that change was due to internal or external activity is unknown.
- Neurons in networks with other neurons don’t know what the brain’s sensors are sensing; they’re simply just responding to their upstream inputs.
- Thought experiment
    - Suppose we connected a camera to a random blob of neurons in a petri dish.
    - We may discover that repeated visual patterns will induce somewhat similar neuronal responses.
    - It’s also possible that some members of the cultured neuronal network will be preoccupied with each other and ignore the stimulation altogether.
    - So far, this is analogous to the passive, representational brain model used in many labs.
    - Since the neurons in the culture have no direct access to the outside world, they have no way of verifying or grounding their patterns to outside events.
    - However, the situation changes dramatically if the spiking output of some neurons is connected to a robot that can move the camera.
    - Now the neurons in the dish have two functions: generating an output and responding to the camera signals.
    - Since the culture is well interconnected, some neurons will receive inputs from both the camera and motor neurons, which informs them that their action caused some change in the sensory input.
    - We’ve now closed the loop between sensation and action.
    - Adding the robot provides the cultured neurons with the same advantage as the experimenter: neurons can now sense both the outside world and the internal computation, and can therefore compare their joint impact.
- The internal feedback from the action-generating neurons to sensory neurons provides the grounding signal that attaches meaning to input-induced neuronal responses.
- While this is the minimum requirement of a brain-like system, random connections and plasticity aren’t enough.
- A large part of the brain’s structure is genetically determined and self-organized activity is as important for the development of the brain as sensory stimulation.
- Instead of the outside-in framework, the author proposes the inside-out framework.
- The main emphasis is on how the brain’s outputs, reflected in behavior, influence incoming signals.
- By linking an otherwise meaningless brain pattern to action, that pattern can gain meaning and significance to the organism.
- An action-perception loop learns to make sense of sensory inputs because no meaning or advantage emerges for the brain without the ability to calibrate neural patterns by behavior-induced consequences.
- In this view, brains largely organize themselves rather than be enslaved to input signals.
- Review of the tabula rasa (blank slate) assumption of the brain and how it’s false.
- Many experiments and studies today are still performed according to this assumption, often going under the name “connectionism”.
- Early behavioral observations already argued against the idea of the brain as a blank slate.
- E.g. Not all animals associate everything equally and not all can be trained to do all tricks. Behaviors that relate to an animal’s ecological niche can be easily trained because the brain is predisposed/prepared to do so.
- Experimental evidence from neuroscience also rules against the tabula rasa model because a lot of the brain’s activity is self-organized instead of being driven by outside signals.
- Instead of the tabula rasa model, the author proposes that learning doesn’t create new brain activity patterns from scratch, but instead is a fitting process where preexisting neuronal patterns are changed as needed.
- One advantage of a preconfigured brain is the stability of brain dynamics.
- Adding new experiences doesn’t perturb the overall state of neuronal networks and solves the catastrophic forgetting problem.
- In the preconfigured brain model, learning is a matching process where preexisting neuronal patterns, initially random, acquire meaning with the help of experience.
- Attaching meaning or significant to any neuronal pattern requires grounding, which can be provided for by action.
- Information isn’t inherent in computation (whether that be machines or brains) but becomes informative when it’s interpreted.
- Brains don’t process information, they create it.
- Coding is an agreement for communication between a sender and receiver, making the content of the encoded information private to outsiders unless they have the code book.

## Chapter 2: Causation and Logic in Neuroscience

- Hypotheses in neuroscience are often tested by models of associations between observed properties of the world.
- Review of interpolation = explanation = deduction and extrapolation = prediction = induction.
- Our choice to call one variable independent and the other dependent is often arbitrary and may reflect our preconceived bias.
- E.g. We can manipulate the independent variable and observe its effect on the dependent variable.
- One way to determine if there’s a cause-effect relationship is to directly manipulate the independent variable.
- E.g. A child flipping a light switch causes the room to brighten and darken. Thus, the child can infer that the light switch controls the room’s lighting.
- Is it true that when the cause is identified, the truth is found?
- Maybe, if there is no other competing cause, then yes, we have found the truth. Revealing a cause amounts to an explanation.
- An event A causes event B if the presence of A is necessary for B to happen.
- In other words, for A to have any effect on B, A has to happen first.
- The author’s goal isn’t to disqualify formalized reasoning, but to call attention to why this simple recipe of logic fails in neuroscience.
- E.g. If an ant climbs on your leg, you notice it and brush it off. However, if you’re intensely focused on a task, you’ll sometimes fail to notice the ant. So, the brain’s state (unfocused or focused) is a cause of feeling the ant even though it often isn’t considered in lab experiments.
- The mind represents, but doesn’t faithfully mirror, reality.
- Review of the problems with causality such as ignoring or neglecting mediator and confounding variables.
- Turning a correlation into causation requires a second validation step, some perturbation/manipulation of the independent variable.
- How do we separate causes from effects in self-organized brain networks with multiple parallel and interacting feedback loops?
- Perturbations are a powerful method for investigating a system and gaining valuable insights from the system.
- Perturbation: a targeted challenge to the system.
- E.g. Lesion studies and transcranial magnetic stimulation (TMS).
- Perturbations have lead us to believe that different parts of the brain are specialized for different functions.
- However, perturbations aren’t enough to conclude that a brain region is specialized for that function because the relationships within the brain are complex.
- In a densely interconnected dynamical system like the brain, minor and local perturbations may induce unexpected activity in downstream and distant structures.
- This highlights the limits of using causation in our search for brain functions.
- Since there’s no simple recipe on how to deal with emergent systems, correlational and perturbation methods should be combined because they represent complementary ways of analyzing the same phenomena.

## Chapter 3: Perception from Action

- Different neurons deal with body sensation and muscle control.
- E.g. Different nerves enter and leave the spinal cord for sensation and action.
- The brain maintains this anterior-posterior body segregation with the action area in front of the sensation area.
- Structures dedicated to perception mostly live in the posterior/back half of the human brain, while the structures dedicated to action mostly live in the anterior/front half.
- Sensation and perception are different.
- Sensation: the instantaneous feeling that receptors are being stimulated.
- Perception: compares sensation with memories of similar experience to identify the evoking stimulus.
- In the outside-in framework, sensory information goes to higher order cortical areas and then to motor areas.
- This route from sensation to action is often referred to as the “perception-action loop”.
- Decisions are made somewhere in the unexplained territory between sensory inputs and motor outputs.
- There’s no need for anatomical connections going in the opposite direction (but we know there are opposite direction connections in the form of efferent copies).
- One of the best known illusions is called apparent motion or the phi phenomenon.
- Phi phenomenon: the illusion of movement when stationary objects are placed side by side and illuminated one after another.
- E.g. Any loading symbol on modern computers and smartphones.
- In the phi phenomenon, the illumination is felt 25 ms or so before it’s actually changed.
- How can a perceptual effect occur before its physical cause?
- We don’t have a clear answer.
- Instead of asking why the brain can be fooled by artificial or rare patterns, we should instead ask why the brain reliably produces such illusions in the first place.
- Illusions aren’t mistakes but are due to the brain’s ability to efficiently and quickly extract important features.
- Why don’t we have a faster perceptual system?
- Because the bottleneck is action; there’s no reason to invest in speed if the muscle system that it controls is slow.
- The author argues that the distinction between “perception-action” and “action-perception” should favor the latter because from an evolutionary perspective, we can have action without perception but not vice versa.
- E.g. Jellyfish and ancient seawater animals can move without sensing much.
- We connect to the world not through our sensors (which are essential) but through our actions.
- The brain’s main function isn’t accurate and true perception and representation of the world, but to learn from the consequences of it’s actions about the aspects of the environment that matter for its goals, such as survival and reproduction.
- Review of efference copies also called corollary discharge.
- Corollary discharge: the mechanism that allow the sensory system to be informed about an action command.
- Neurons can’t interpret the relevance of signals conveyed by sensory inputs because they’re not grounded in some independent verification.
- There must be brain mechanisms that separate self-generated stimulation from externally-induced stimulation.
- Similar to the negative of a photograph, the stimulation from a sensor during the movement is the positive print that’s canceled by the corollary discharge of the negative print.
- Thus, action directly influences sensation.
- The corollary discharge is an invention by the brain.
- Two types of corollary discharge
    - Adaptive filtering: filtering out self-generated signals using a corollary discharge synchronized with motor production.
        - E.g. Cricket’s inhibit sensing their own chirping which lets them be fully alert while chirping at loud sounds.
    - Time division: when a corollary discharge and signal detection occur at different times.
        - E.g. During a blink or saccadic eye movements, inputs from the world disappear or get blurred but we don’t notice it.
- Sampling the world, instead of continuously detecting it, has some advantages.
- E.g. Blurred vision is prevented during a saccade because visual input is suppressed. Corollary discharges help coordinate neural activity. Suppressed spiking conserves resources and allows the visual system to be more sensitive after a saccade.
- Sampling may have evolved due to muscle constraints.
- E.g. A muscle’s fastest reaction is a twitch followed by a refractory period.
- Other advantages of sampling
    - Introduces a way to chunk information, similar to spaces between words.
    - Simplifies information processing and introduces a clear time reference frame.
- The interesting case of AI, who couldn’t make eye saccades due to unusable eye muscles, compensated for frozen eyes by making head saccades. Although slower, AI’s saccade strategy is the same as a normal person.
- Active sensing: a brain-initiated search in contrast to responding to an expected event.
- Two forms of active sensing
    - Moving the entire body
    - Moving the sensors
- Both forms of active sensing can be exploited by the same animal.
- Review of electrolocation in weakly electric fish and echolocation in bats.
- Smelling is another elegant example of active sensing in animals.
- E.g. Sniffing optimally samples the odorant by generating turbulence so that odorants that normally slowly diffuse come into direct contact with the olfactory receptor.
- Eye movements improve the visual performance of the sensory system and helps to maintain perception during visual fixation.
- Saccades can be considered as “visual sniffs” that improve seeing.
- Another example of when sensing self-generated action is useful is during speech.
- Auditory feedback is very useful in speech to distinguish external sounds from self-generated sounds.
- Auditory regions also receive direct projections from motor areas, providing the necessary pathway for conveying corollary discharge signals.
- These signals strongly suppress both spontaneous and tone-evoked synaptic activity by using a feed-forward inhibitory mechanism that activates inhibitory interneurons in the auditory cortex.
- One could argue that sensation doesn’t require action because you can just sit there and experience the world without moving.
- However, such perception happens in an already calibrated brain where meaning has already been placed in a memory store.
- So we don’t need to actively sense stimuli because we’ve already done it before.
- Random kicks while the baby is in the womb is used to test the limits of the baby’s body to prune the brain.
- The initially meaningless, action-induced feedback from sensors transduces the spatial layout of the body into temporal spiking relationships among neurons in the brain.
- This is how the brain acquires knowledge of the body it controls.
- Once the body scheme is built, the relationships between spindles and muscle jerks mostly disappears but may show up occasionally as whole-body jerks just before sleep.
- Thus, action teach perception; perception is an action-based process, an exploration initiated by the brain.

## Chapter 4: Neuronal Assembly: The Fundamental Unit of Communication

- A single neuron is thought to be the fundamental unit of computation in the brain.
- But that doesn’t seem right since one neuron can change functions, may die, and combining the responses of multiple neurons doesn’t account for changes due to feedback.
- E.g. Playing each instrument in an orchestra and then combining the sounds to form the song. While this works, playing all instruments to form the song is better as it allows for feedback between each instrument and better harmony. The whole is greater than the sum of the parts.
- Cell assembly/Neuronal ensemble: the idea that a group of neurons can align themselves for a particular purpose and disband when unused.
- Review of Hebb’s rule and Georgopoulous’s population vector.
- A cell assembly can only be defined from the perspective of downstream “reader” mechanisms because the relevance of a particular group of active neurons can only be judged from its consequences.
- The reader mechanisms can be a muscle, a single neuron, groups of neurons, a machine, or even another human who interprets the meaning of the inputs.
- The assembly must have consistent responses as this is what makes any neuronal coalition meaningful.
- This require a temporal integration mechanism such as Hebb’s rule or STDP.
- We found that the best prediction of spike timing in single hippocampal neurons from the activity of their peers was when the time window varied between 10 and 30 ms.
- This is significant because this time window also matches the membrane time constant of cortical pyramidal cells and determines their integration ability.
- So, by monitoring the spiking activity of reader neurons, we can determine whether the upstream neurons are part of the same assembly and serve the same goal, or if they belong to a different assembly.
- The temporal interaction between the opposing excitatory and inhibitory postsynaptic effects gives rise to an oscillating tug of war and forms the basis of the gamma oscillation.
- The time scale of gamma waves matches the temporal window of STDP, which supports the importance of upstream cell assemblies.
- A cell assembly can be thought of as a letter in the brain’s vocabulary.
- The size of a neuronal assembly isn’t easy to define since neurons may belong to different assemblies and feedback complicates things.
- However, we will assume that a small cell assembly involves tens to hundreds of pyramidal cells and their partner interneurons.
- Concatenating multiple assemblies to form neuronal words that lead to a percept or action depends on additional factors.
- Spikes from a single neuron rarely result in the postsynaptic neuron firing. This is desired because if it did happen often, then spikes would contain little information.
- To effectively send a message, a neuron must cooperate with its peers by synchronizing spikes together within a time window limited by the ability of downstream reader neurons to integrate the incoming signals.
- The cell assembly is defined from the reader neuron’s point of view to be a unit of neuronal communication.

## Chapter 5: Internalization of Experience: Cognition from Action

- The core idea is that cognition depends on prior action-based experiences of the world, which allow us to test “what if” scenarios and to anticipate the possible consequences of alternative actions without actually taking them.
- One fundamental principle of adaptive systems is that by storing past experiences, systems can deal with a future occurrence of similar situations more effectively.
[Figure 5.1](figure5-1.png)
- Both small and large brains share the goal of trying to predict the future consequences of their actions.
- However, more complex brains allow for prediction at much longer time scales and in more complex environments.
- This requires the storage of vast amounts of past experience to compare the current situation to similar experiences in the past.
- Learning makes the longer, more complex neuronal loops smarter by enabling the organism to interpolate and extrapolate from past events, thereby generalizing the experience to new situations.
- The corollary discharge mechanism, along with memories, can substitute for the feedback provided by the environment, enabling us to simulate actions without incurring the actual consequences.
- Such internalized actions or simulations allow the brain to inspect its own computations, evaluate imagined scenarios, and estimate the consequences of potential actions, all without overt inputs or outputs.
- To a brain network, there’s no difference between actual sensory input and self-generated sensory input.
- Without external constraints, disengaged processing in the brain can create an internalized virtual world.
- In short, cognition is time-deferred action.
- Two functions of most brain structures
    - Being connected to sensory input or motor output and varying their cell assembly contents at the pace of changing sensory inputs.
    - Relying on their internal dynamics, often maintained by brain rhythms.
- Review of head direction cells, grid cells, and place cells.
- To construct a map, someone needs to explore every single location in the environment and describe it by the intersection of horizontal and vertical coordinates on the map.
- Physical maps are a prime example of the externalization of brain function.
- Each environment is represented by a unique combination of active place cells and place fields.
- The spatial layout of individual place cells isn’t related to the location it represents. In other words, there’s no topographic organization for place cells; physically close place cells may represent far away locations.
- Instead, place cells dynamically and randomly reconfigure under various conditions.
- The same set of neurons can give rise to many different relationships, each of them representing a map thus reusing neurons.
- Head direction information and self-motion are integral parts of the navigation system, which supports the idea that landmarks and environmental stimuli gain their meaning by action.
- Path integration: using body cues such as proprioceptive feedback, number of steps taken, vestibular input, and corollary discharge from self-motion to determine location.
- Path integration can operate without a prior spatial reference and in complete darkness by calculating distance traveled and turns made.
- However, it’s limited because changes in speed and direction accumulate errors.
- As each estimate of position is relative to the previous one, errors quickly build up.
- Position, speed, distance, and head direction information are present in the hippocampus and adjacent neurons.
- Simultaneous localization and mapping (SLAM): combining motor-driven path integration and sensor-dependent landmark detection.
- The hippocampus-entorhinal system has a topographically organized bidirectional communication with the neocortex.
- This suggests that whatever information the hippocampus receives from the neocortex, the same computation will be performed.
- Review of declarative, episodic, and semantic memories.
- Author’s proposals
    - The brain mechanisms that initially evolved for navigation in physical space are the same as those used for navigation in cognitive space to create and recall episodic memories.
    - Neural algorithms evolved to support map-based navigation are the same as those used to create, store, and remember semantic knowledge.
    - The generation of semantic knowledge requires prior self-referenced episodic experiences similar to map creation.
[Figure 5.7](figure5-7.png)
- Episodic memories are observer-dependent (egocentric) and semantic memories are observer-independent (allocentric).
- Not everyone agrees that episodic experience is needed to encode semantic information.
- In humans, speech and other externalized functions of the brain allow rapid acquisition of semantic knowledge without the need for personal experiences.
- E.g. Naming objects and that people without a hippocampus can still learn facts and communicate them.
- Are the neural circuits used to create semantic and episodic memories the same or different?
- Another controversy is if memories remain in the circuits where they were created or if they move gradually from the hippocampal system to the neocortex over time.
- Do memories require the structure that originally created them?
- Skipping over the mirror neuron section.
- Emotions can be thought of as the reaction of the amygdala and neocortex to the corollary discharge system.
- Another argument for an action-based understanding of the brain is that in language, the verb is the centerpiece of a sentence.
- “Our talk gets its meaning from the rest of our activities.” - Wittgenstein
- Interestingly, many people that go deaf can still speak, sing, and compose music because their corollary feedback loop system has already been calibrated. In contrast, no composer born with hearing loss is known.

## Chapter 6: Brain Rhythms Provide a Framework for Neural Syntax

- The separation of messages is the most important thing in any coding system.
- E.g. Speech, written language, computer language, or spike transmission.
- Syntax: a set of rules that govern the transformation and progression of discrete elements in ordered and hierarchical relations.
- In this chapter, the author proposes that neuronal rhythms provide the necessary syntactical rules for the brain so that unbounded information can be generated from spike patterns.
- Brain rhythms are important because they form a hierarchical system that offers a syntactical structure for the spike traffic within and across neuronal circuits at multiple time scales.
- Changing such rhythms results in mental and neurological disease.
- Review of local field potential (LFP), electrocorticogram (ECoG), electroencephalogram (EEG), and magnetoencephalogram (MEG).
- These are important because they provide information about the timing of cooperating neurons.
- They can’t provide information about individual conversations in a football stadium, but they can provide information about important events such as a goal or the emergence of synchronized patterns in the brain.
[Figure 6.1](figure6-1.png)
- The different oscillations generated in cortical networks show a hierarchical relationships, often expressed by cross-frequency phase modulation between the various rhythms.
- Cross-frequency phase modulation: when the phase of a slow oscillation modulates the amplitude of a faster oscillation. In turn, the phase of the faster rhythm modulates the amplitude of an even faster one and so on.
- An analogy is that the four seasons of the year modulate both the amplitude and duration of day length.
- Because of cross-frequency coupling, the duration of the fastest event is limited by the phase range of the slower event.
- E.g. Ultrafast oscillations in the hippocampus are phase-locked to the spikes of both pyramidal cells and interneurons and modulated by thalamocortical sleep spindles. Sleep spindles, in turn, are phase-modulated by cortical delta oscillations.
- The nested nature of brain rhythms may represent the needed structure for syntactic rules, allowing for both message separation and linking into neuronal words and sentences.
- All neuronal oscillations are based on inhibition.
- Three classes of inhibitory interneurons
    1. Innervates the axon’s initial segment and can influence the timing of spikes.
    2. Innervates the region surrounding the cell body and can segregate dendrites from axons.
    3. Dendritic inhibition and can filter out excitatory inputs onto different dendritic segments.
- Inhibition of excitatory neurons can be thought of as the punctuation marks of neural syntax because they can parse and segregate neuronal messages.
- The coordinated action of interneurons can route excitatory information at the right time and to the right place.
- Inhibition is the foundation of brain rhythms as the balance between excitation and inhibition is most efficiently achieved through oscillations.
- Oscillations can transform both interconnected and unconnected neuron groups into temporary coalitions, providing flexibility and economical use of spikes.
- Due to axonal conduction delays, slow waves are larger and involve many neurons in many brain areas, whereas fast waves are smaller and involve local neurons.
- The consequence is that perturbations at slow frequencies affect all nested oscillations.
- However, this also means that the brain can integrate many distributed local processes into globally ordered states.
- E.g. Local computations can be under the control of more global brain activity such as attention, executive function, or top-down control.
- Oscillations also coordinate input and output neurons as there are ideal and non-ideal phases in an oscillation.
- E.g. It’s easier to send a message during the excitation phase (ideal) than the inhibition phase (non-ideal).
- This also impacts the timing of output spikes by synchronizing cell assembly activity and chunking information.
- Rhythms (neural oscillations) are surprisingly conserved throughout evolution, suggesting a fundamental role for temporal coordination of neuronal activity.
- Every known pattern of LFP, oscillatory or intermittent, in one mammalian species is also found in virtually all other mammals.
- E.g. Frequency bands, duration and temporal evolution, and their cross-frequency coupling relationships such as in sleep spindles in mice and humans.
- This is both expected and unexpected
    - Expected because the mechanisms underlying neural rhythms (neurotransmitters, receptors, and membrane time constants) are also conserved.
    - Unexpected because the speed of communication between areas in small and large brains varies.
- Two mechanisms that scale neuronal networks but conserve timing
    - Shortening synaptic path length
        - Synaptic path length: the average number of synaptic connections in the shortest path between two neurons.
        - Results in a small-world network architecture that allows for scaling while keeping the average synaptic path length similar.
    - Enlarging and insulating axons
        - Solves the travel time problem of APs in larger brains.
        - E.g. Maintaining gamma band synchrony in the mouse brain needs a conduction velocity of 5 m/sec compared to humans which require much more rapidly conducting axons.
        - Timing mechanisms can be preserved by adding large and more strongly myelinated axons that allow signals to travel farther within a similar time window.
- It’s clear that oscillations don’t serve any special biological function, but that the benefits of a particular oscillation depend on the function of the brain system that supports it.
- A striking example of the selection and amplifying properties of brain oscillators is their response to speech.
- Two features of brain oscillations that aid in the extraction of speech
    - Correspondence between speech and native brain rhythm frequencies.
        - Can amplify sound features and assist with the segmentation of speech components.
    - Ability of neuronal oscillators to reset their phase can track the temporal features of spoken language.
- It’s tempting to draw parallels between neuronal syntax and language syntax and it may only be a coincidence. Maybe speech has nothing to do with brain rhythms.
- It’s unlikely that speech patterns impose onto brain rhythms as brain rhythms are conserved across species, suggesting instead that speech was built on preexisting brain dynamics.
- The cocktail party phenomenon may also be explained by brain rhythms where attended speech is amplified and unattended speech is filtered and suppressed because their speech arrived during the ignoring phase of the rhythm.

## Chapter 7: Internally Organized Cell Assembly Trajectories

- To effectively support cognitive operations, the brain should self-generate large quantities of cell assembly sequences.
- Neurons form cell assemblies by synchronizing their firing within short time windows (gamma cycle).
- Neuronal trajectory: sequences of population vectors evolving in space and time.
- The shape of a neuronal trajectory reflects a combination of the input that initiated the sequence, and the constraints of the brain networks that the vector moves through.
- Skimming over the bird song and rodent grooming examples.
- Two ways to create neuronal sequences
    - Neuronal activity can reflect responses to external (environment or bodily) stimuli.
    - Neuronal activity can change independent of sensory inputs.
- In the hippocampus, because the brain has access to velocity from the body and vestibular system, time and distance can be interchangeably calculated.
- Plans are deferred actions.
- Imaging experiments support the view that neuronal assemblies that initially process episodic or semantic information are similar to or overlap with those that become active when we recall or imagine the same information.
- The exact mechanisms that generate self-organized sequential activity of neurons aren’t perfectly understood.
- However, the principles are known and there are two requirements.
- Two requirements of self-organized activity
    - A network that has competitive processes.
    - A short-term accommodation feature.
- Review of the dynamical systems approach to the brain.
- When many initial conditions produce many unique trajectories, the fraction of neurons that participate in multiple trajectories will increase.
- Thus, neurons participate in overlapping trajectories and may be useful linkages that connect different trajectories.
- If events can be represented as trajectories involving many neurons over time, the combinatorial possibilities of the network become extremely large.
- Learn isn’t just an outside-in process where new neuronal sequences are built up with each new experience, but instead, learning may be an inside-out matching process where spontaneous neuronal trajectories coincide with a useful action, thus that trajectory acquires meaning to the brain.
- Neural messages are only as useful as their readability.
- Oscillations both chunk messages and temporally coordinate the activity of sender and receiver populations to ensure that messages have the correct length.
- Temporal windows that allow information to be exchanged are set by the action system.
- The general principle is that the reader initiates communication with a slow oscillation, while the messages are sent through faster oscillations such as gamma or ripple.
[Figure 7.9](figure7-9.png)
- As with speech, evaluating neural messages takes time and requires the full sequence.

## Chapter 8: Internally Organized Activity During Offline Brain States

- Sharp wave ripples represent the most synchronous population patterns in the brain, more synchronous than the responses evoked by sensory stimulation of any strength.
- Yet sharp wave ripples are self-organized and are spontaneously emitted by hippocampal circuits.
- Is there a good reason for this activity or is it a random phenomenon?
- There’s no trigger to make a sharp wave ripple happen and it’s produced by tens of thousands of neurons in the hippocampus.
- The sharp wave ripple shares features of the electric pulse patterns that bring about long-term changes in synaptic plasticity.
- They’re also found in every mammalian brain in the same form and shape.
- Sharp wave: large amplitude, negative polarity deflections in the apical dendritic layer of CA1 pyramidal neurons.
- The sharp wave is a sign of strong firing coordination between the upstream neurons in CA2 and CA3 regions.
- Thus, measuring the sharp wave amplitude is a proxy to quantify the magnitude of this synchrony.
- Sharp waves may transmit information from the hippocampus to the neocortex.
- The sharp wave ripple is a compression of event sequences that have either happened or will happen, and is crucial for consolidating memories into a more permanent form.
- They repeat snippets of the previously learned information over and over again during sleep.
- Sharp waves may correlate with preconscious contemplation when you let your mind wander while trying to reach the correct solution.

## Chapter 9: Enhancing Brain Performance by Externalizing Thought

- This chapter tackles the complex issue of how the externalization of brain function affects our brain and the brains of others.
- Types of brain output
    - Muscle movement
    - Autonomic nervous system
    - Hormones
    - Thoughts
- The prefrontal cortex can be thought of as an offshoot of the motor cortex with a similar neural architecture.
- E.g. Having many layer 5 spindle cells with long, strongly myelinated axons.
- The main difference between the two cortices is that the motor cortex leads to immediate action, while the prefrontal cortex can only simulation action (planning and imagination).
- Externalization of brain function enables both the broadcasting and copying of complex ideas, intentions, and emotions from brain to brain regardless of space and time.
- Meaning is created when a group of people weave together a common story.
- So a concept becomes a concept only by externalized grounding in other brains.
- One external artifact that’s had a large impact on our ideas is the clock.
- A clock externalizes the concept of space and time.
- Review of the history of clocks and time.
- Without precise clocks, we couldn’t conceive of travel, communication, and cooperate at today’s global scale.
- An externalized thought can be shared by many people to many people.
- E.g. One person can reach a large audience and a large audience can reach a single person.

## Chapter 10: Space and Time in the Brain

- In many languages, distance and duration are synonymous.
- E.g. “I’m an hour away from there.” and “That took a long time.”
- Review of the physics of space and time.
- Maybe the hippocampus isn’t just for memory and space, but is a neuronal sequence generator that can create order from sequential events and reproduce it upon recall.
- In this view, the hippocampal system simply points to the items stored in the neocortex in the same order as they were experienced; the hippocampus as a librarian.
- Many structures that we view as part of the memory system are inseparable parts of planning, imagining, and action systems.
- Skimmed most of this chapter due to better notes about the neuroscience and physics of time in “Your Brain Is a Time Machine” by Dean Buonomano.

## Chapter 11: Gain and Abstraction

- Gain modulation requires an amplifier and a modulator.
- Neurons in the retina have to deal with large variations in light intensity, ranging over nine orders of magnitude.
- The eye has multiple mechanisms to deal with such large dynamic range such as adjusting the pupil, squinting, and using different sensors in the form of cones and rods.
- However, visual neurons still have to deal with a wide dynamic range.
- The solution is to respond not to the absolute magnitude of the input, but to the relative changes in intensity known as contrast.
- Retinal neurons receive information about the mean background intensity and the deviation from this mean to calculate the ratio/contrast against any light intensity.
- Gain control in neurons
    - Shunting: changing a neuron’s response to a given input based on other inputs.
    - Inhibition: reducing a neuron’s ability to respond.
    - Short-term plasticity: the shorter the intervals between input spikes, the stronger the synaptic depression.
    - Neuromodulators: chemicals that adjust the excitability of their target neurons.
- Selective attention multiplies or gain-modulates a neuron’s response by a constant factor without changing its tuning characteristics.
- Attention can be viewed as internalized gain control.

## Chapter 12: Everything Is a Relationship: The Nonegalitarian, Log- Scaled Brain

- The division of labor, made possible by diversity, is one rule of living systems.
- E.g. Having different organs to handle different functions, having different electronic components for different purposes, having different employees to handle different jobs.
- In the brain, the different types of neurons, synapses, and networks are specialized for their function too.
- This makes it very difficult to understand the properties and functions of the brain since the components are unique.
- In contrast, using many identical components lets us get a good understanding of their average behavior from macroscopic observations.
- E.g. The properties of gases can be described by measuring temperature without knowing the position and velocity of every molecule. Computers use the same transistor again and again.
- An analogy to the brain is an orchestra where the interaction between different instruments gives rise to a limitless variety of different compositions.
- Review of the Weber-Fechner law.
- When comparing two objects, we perceive not the difference between the objects, but the ratio of the difference to the absolute magnitude of the objects.
- Sensation is a logarithmic function of physical intensity.
- E.g. When stimulus strength multiplies, the strength of perception adds. This is the log law: “log(AB) = log(A) + log(B)”
- This applies to vision, hearing, taste, decision-making, and short-term memory.
- Why is the relationship logarithmic? And where does it come from?
- It may come from the log-normal distributions of anatomical connectivity.
- E.g. Synaptic weight distributions, firing rates, and neuronal population activity.

## Chapter 13: The Brain’s Best Guess

- We all have two virtual divisions in our brain: the “good-enough” brain and the “precise” brain.
- Review of the Bayesian brain model and tabula rasa (blank slate) view of the brain.
- Why the brain isn’t a blank slate
    - Preexisting forms provide the necessary balance to keep the brain’s dynamics stable and robust against competing needs, such as learning and sensing a wide dynamic range.
    - A newly acquired experience isn’t created by adding new words to a vocabulary list, but by adding meaning to an existing dictionary.
    - The scaffold allows the brain to make guesses about the consequences of its actions.
- Two purposes of brain rhythms
    - Maintain stability and robustness
    - Offer a substrate for syntactical organization of neural words and sentences
- This organization is called the preformed/preconfigured brain. It’s a preexisting dictionary of nonsense words combined with internally generated syntactical rules.
- Thus, brain syntax preexists meaningful content and action-based experience adds the missing meaning.
- Meaning are action-calibrated neuronal trajectories.
- Only through actions can neurons relate their responses to sensory inputs to something supported by the corollary discharge mechanism.
- Corollary discharges provide sensory circuits with a second opinion, a reality check against what comes into the brain through its sensors.
- Every self-generated action can be thought of as the brain’s hypothesis testing.
- As more knowledge is accumulated, a larger fraction of neuronal trajectories become meaningful to the organism.
- The brain can’t help instantly comparing relationships rather than identifying explicit features.
- There’s no such thing as an unknown for the brain because it can always match it to something previously seen.
- When there’s a discrepancy between an input and the highest probable existing trajectory, a new combination is made from existing trajectories and added to the brain’s knowledge base.
- The number of human languages illustrates the possibilities and constraints of the log-dynamic brain.
- E.g. There are more than 6,000 mutually unintelligible languages spoken by humans, exemplifying the rich generative abilities of neuronal circuits.
- Yet, regardless of the meaning and written words of different languages, all languages have the same basic generative rules (syntax) and are guided by the constraints of the hierarchical syntactic organization of brain rhythms.
- Quantity judgment is different from number-based counting. Most animals don’t count but estimate ratios.
- Neuronal firing matches the perceived quantities on a logarithmic rather than a linear scale.
- The hippocampus has many possible neuronal trajectories before exploration begins.
- The brain may have evolved to mimic the statistical probabilities of the physical world and thus became an efficient predictor of events.

## Chapter 14: Epilogue

- Author argues that the outside-in framework has reached its limit in neuroscience research.
- The goal of this book isn’t to convince but to expose the problems and highlight the author’s proposed solution.
- We know the unknown not because we remember it, but because our brains are programmed to make a guess under all conditions.
- Even in the most unexpected situations, our brain generalizes by relating the new situation to an older situation.
