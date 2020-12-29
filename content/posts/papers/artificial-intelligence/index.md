---
layout: post
title: "Artificial Intelligence Papers"
date: "2020-10-09"
categories:
  - Papers
excerpt: "My notes on papers exploring artificial intelligence."
---

## [Neuroscience-Inspired Artificial Intelligence](https://doi.org/10.1016/j.neuron.2017.06.011)

- Communication and collaboration between the fields of neuroscience and artificial intelligence has become less commonplace.
- Building AGI is a daunting task because the search space of possible solutions is vast and sparse.
- The human brain is the only existing proof that such an intelligence is possible.
- Two benefits of neuro-inspired AI
    - Neuroscience provides a rich source of inspiration for new types of algorithms and architectures.
    - Neuroscience can provide validation of AI techniques that already exist.
- From a practical standpoint of building AGI, we don’t need to slavishly enforce adherence to biological plausibility.
- From an engineering perspective, what works is ultimately all that matters.
- We should focus on the top two levels of Marr’s three levels of analysis, the computational and algorithmic level.
- Ignoring the implementation level means differentiating it from the Blue Brain Project or the field of neuromorphic computing.
- Four cases where recent developments have been guided by neuroscientific ideas
    - Attention
    - Episodic memory
    - Working memory
    - Continual learning
- Where neuroscience can help AI
    - Intuitive understanding of the physical world.
    - Efficient learning
    - Transfer learning
    - Imagination and planning
    - Virtual brain analytics
- The past contributions of neuroscience to AI have rarely involved a simple transfer of full-fledged solutions that could be directly re-implemented in machines.
- Rather, neuroscience has been useful in a subtler way, stimulating algorithmic-level questions about facets of animal learning and intelligence.

## [Deep Learning: A Critical Appraisal](https://arxiv.org/abs/1801.00631)

- The author details ten concerns for deep learning (DL).
- Is deep learning approaching a wall?
    - Review of 2012 ImageNet paper that started the deep learning revolution.
    - The purpose of this paper is to both temper some irrational exuberance regarding deep learning and to also consider what we as a field might need to move forward.
    - This is a good moment for a critical reflection on what deep learn has and hasn’t been able to achieve.
- What deep learning is, and what it does well
    - Deep learning: a statistical technique for classifying patterns using neural networks with multiple layers.
    - Review of neural networks, back-propagation, convolutional neural networks, and object recognition.
- Ten limits on the scope of deep learning
    1. DL is data hungry
        - Compared to humans, deep learning requires much more data.
    2. DL is shallow and has limited capacity for transfer
        - Transfer tests, tests where the scenario differs in minor ways from the trained scenarios, show that deep reinforcement learning’s solutions are often superficial.
        - E.g. Moving the height of the paddle in the Breakout game.
    3. DL has no natural way to deal with hierarchical structure
        - The core problem is that DL learns correlations between sets of features that themselves are flat/nonhierarchical.
    4. DL has struggled with open-ended inference
        - E.g. Reading between the lines
    5. DL isn’t transparent enough
        - Neural networks have millions or billions of parameters that aren’t human interpretable.
    6. DL hasn’t been well integrated with prior knowledge
        - There isn’t an explicit encoding of knowledge.
        - E.g. DL can’t take advantage of Newton’s laws and must approximate it.
        - DL researchers have a very strong bias against including prior knowledge even when that prior knowledge is well known and is useful.
        - It isn’t straight forward how to integrate prior knowledge into DL systems because DL systems represent knowledge mainly as correlations between features, rather than abstractions like quantified statements.
        - Common sense reasoning also remains outside the realm of DL.
    7. DL can’t distinguish causation from correlation
        - E.g. There’s a correlation between a child’s height and vocabulary, but less easily represented is that the correlation derives from growth and development. Kids get bigger as they learn more words, but that doesn’t mean that growing tall causes them to learn more words, nor that learning new words causes them to grow.
    8. DL presumes a largely stable world, in ways that may be problematic
        - E.g. Google Flu Trends that failed to predict the 2013 flu season.
    9. DL works well as an approximation, but its answer often can’t be fully trusted
        - E.g. DL systems that mistake slightly defaced stop signs as speed limit signs.
    10. DL is difficult to engineer with
        - It’s difficult to guarantee that DL systems will work in alternative circumstances with novel data that may not resemble previous training data.
        - DL isn’t made of simpler systems with guaranteed performance and reliability.
- In general, DL is a perfectly fine way of optimizing a complex system for representing a mapping between inputs and outputs, given a sufficiently large data set.
- DL is just another statistical technique.
- Potential risks of excessive hype
    - One of the biggest risks in overhyping AI is another AI winter.
    - The author personally fears that the field of AI could get trapped in a local minimum, dwelling too heavily in the wrong part of intellectual space.
- What would be better?
    - We need to reconceptualize DL not as a universal solvent, but simply as one tool among many.
    - Four future avenues of research
        - Unsupervised learning
        - Symbol-manipulation and hybrid models
        - Insights from cognitive and developmental psychology
        - Bolder challenges

## [Backpropagation and the brain](https://www.nature.com/articles/s41583-020-0277-3)

- Does backpropagation offer insights for understanding learning in the human brain?
- Although the brain modifies synapses to learn, it’s not understood how these changes are orchestrated across the entire brain to achieve the network’s goal.
- Backpropagation (backprop): the use of error signals sent through feedback connections to adjust synapses.
- However, the brain appears to use its feedback connections for different purposes.
- Paper argues that in spite of these apparent differences, the brain has the capacity to implement the core principles underlying backprop.
- Synaptic weights → Neural activity → Network’s output → Network’s error.
- We can reduce the error by making small changes in synaptic weights.
- It’s difficult to decide such changes because a synapse’s strength doesn’t directly influence the network’s output.
- The radius of a synapse’s influence, it’s projective field, rapidly expands along the network so the effect of changing the synapse strength depends on the strengths of the subsequently connected synapses.
![Figure 1](figure1-1.png)
- One way to decide synaptic strength changes is through weight perturbation or by adding noise to each synapse and seeing how it affects the error.
- However, weight perturbation is inefficient and requires a lot of trial-and-error.
- Backprop addresses the efficiency issue by computing, rather than measuring, how a change in synapse strength will affect the network’s error.
- This computation is possible because we have access to the exact causal relationship between the synapse strengths and the network’s output.
- The key to backprop is the application of the chain rule of calculus using a recursive computation of error signals.
- Credit assignment: determining which parameter, such as a synaptic weight, contributed to the magnitude of the error signal.
- Backprop falls under a more general mechanism known as credit assignment.
- Note that backprop doesn’t need to be a difference between an output and a supervised target. It can also be a temporal difference or a policy gradient or a prediction error.
- An important empirical feature of backprop is its ability to quickly find good internal representations of inputs.
- Internal representations aren’t specified explicitly by the input/output targets.
- Two critical features of backprop (that’s also shared by the brain)
    - The prescription of synapse-specific changes.
    - The requirement for feedback connections that deliver error information to neurons.
- It isn’t clear what role feedback connections play in cortical computations, so we can’t say that the cortex employs backprop-like learning.
- There is no direct evidence that the brain uses a backprop-like algorithm for learning.
- To our knowledge, no one in the machine-learning community has been able to train high-performing deep networks on difficult tasks such as classifying the objects in ImageNet photos using any algorithm other than backprop.
- Findings are consistent with the hypothesis that feedback connections in the cortex drive learning across multiple layers of representation.
- Three major difficulties in implementing backprop in biological circuits
    - Backprop demands synaptic symmetry in the forward and backward paths.
        - Retrograde neuronal communication was used to try to implement the backpropagating error signal but this idea has been abandoned because it’s too slow.
        - Weight transport problem: the need to have the same weight on two different connections.
        - Feedback alignment: networks with fixed random feedback weights learn to approximately align their feedforward synaptic weights to their feedback weights.
        - Feedback alignment suggests that feedback connections don’t need to be symmetric to their feedforward counterparts to deliver useful information and provides evidence that precise symmetry isn’t always required for effective learning.
    - Error signals are signed and potentially extreme-valued.
        - This problems is referred to as the problem of exploding/vanishing gradients.
    - Feedback in brains alters neural activity.
        - In backprop, error signals don’t influence neurons but only synapses.
        - In the cortex, feedback connections can serve multiple roles such as driving activity or modulating it.
        - In other words, the feedback in the brain is more elaborate and rich compared to backprop.
- Neural gradient representation by activity differences (NGRAD): learning mechanisms that use differences in activity states to drive synaptic changes.
- NGRAD hypothesis: the idea that the cortex uses an NGRAD to perform an approximation to gradient descent.
- The fundamental idea is that top-down-driven activities drive learning without carrying explicit error information between layers.
- The use of locally available information to capture the error information that guides learning.
- Auto-encoder: a network that aims to reconstruct its own input.
- No existing algorithm for multilayer credit assignment can be squared with what we know about the neurophysiology of the cortex.
- To function in neural circuits, NGRADs must
    - Coordinate interactions between feedforward and feedback pathways.
    - Compute differences between patterns of neural activities.
    - Use this difference to make appropriate synaptic updates.
- The introduction of backpropagation generated excitement in the neuroscience community as a possible source of insight about learning in the cortex.
- However, interpreted literally, backprop has obvious biological implausibilities.
- E.g. ANNs violate Dale’s law, which states that neurons are either excitatory or inhibitory, not both.
