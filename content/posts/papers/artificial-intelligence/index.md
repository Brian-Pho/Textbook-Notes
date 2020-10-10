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
