---
layout: post
title: "SENG 511: Software Process and Project Management "
date: "2019-09-01"
categories:
  - Courses
excerpt: "Software Process and Project Management "
---

## 1. Overview

- The difference between developing the right product and developing the product right

## 2. Why SPM

- Why software projects fail
    - Unrealistic goals
    - Inaccurate estimates
    - Poor communication
- Parts of a project management life cycle (PMLC)
    - Scope
    - Plan
    - Launch
    - Monitor & Control
    - Close
- PMLCs
    - Unclear goal + unclear solution = extreme (xPM)
    - Unclear goal + clear solution = emertxe (MPx)
    - Clear goal + unclear solution = iterative adaptive, agile project management (APM)
    - Clear goal + clear solution = linear incremental, traditional project management (TPM)
- Incremental: building one part completely at a time based on the original idea
- Iterative: building a rough version, validating it, and continuing to build more quality and functionality into it
- Four P's in SENG
    1. People
    2. Project
    3. Process
    4. Product
    - People work on a project to create a product using a process
    - Project vs product manager
- Project management body of knowledge (PMBOK)
    - Integration
    - Scope
    - Time
    - Cost
    - Quality
    - Human Resource
    - Communication
    - Risk
    - Procurement
    - Stakeholders
- Four core entities of software projects
    - Intent
    - Work
    - People
    - Product
- Four levels of success
    - Project management
    - Project
    - Future potential
    - Business
- Organizational factors
    - Business domain
    - Maturity
    - Level of innovation
- Project factors
    - Size
    - Architecture
    - Business model
    - Age

## 3. Software Measurement

- Measurement: process of assigning values to attributes
- Measure: attribute associated with a value
- Code churn: the number of lines of code that were modified
- Goal-Question-Metric (GQM) diagram
- Levels of measurement
    - Nominal: named variables, equality (=, !=)
    - Ordinal: named + ordered variables, ranked (>, <)
    - Interval: named + ordered + interval variables (+, -)
    - Ratio: named + ordered + interval + absolute zero variables (*, /)
- Pareto principle: 80% of the effects come from 20% of the causes
- Pareto chart: chart of descending order of frequency/magnitude of problems

## 4. Project Risk Management

- Risks: all events/conditions that may occur in a project that have negative consequences on a project's outcome
- Risk management steps
    1. Identification
    2. Assessment
    3. Mitigation
    4. Monitoring and control
- Risk identification
    - Sensitivity analysis: change the model and observe the behavior
    - SWOT (strengths, weaknesses, opportunities, threats) analysis
    - Cause and Effect / Ishikawa (fishbone) diagram: problem, causes, and causes of causes
    - Decision tree: decision nodes (squares) and change nodes (circles)
- Risk assessment
    - Types of risks
        - Technology
        - People
        - Tools
    - Static risk assessment matrix (scale versus probability)
- Risk mitigation
    - Accept
    - Mitigate
    - Avoid

## 5. Project Planning

- Five functions
    1. Planning
    2. Organizing
    3. Staffing
    4. Directing
    5. Controlling
- What to plan
    - Time
    - Effort
    - Quality
    - Schedule
    - Resources
    - Risks
- Nine deadly sins of project planning
    1. Not planning at all
    2. Failing to account for all project activities
    3. Failure to plan for risk
    4. Using the same plan for every project
    5. Applying prepackaged plans indiscriminately
    6. Allowing a plan to diverge from project reality
    7. Planning in too much detail too soon
    8. Planning to catch up later
    9. Not learning from past planning sins
- Planning pain curve: good planning should have its pain upfront instead of later
- Planning importance
    - Reduced uncertainty
    - Increases understanding
    - Improve efficiency
- Work Breakdown Structure (WBS): a hierarchical description of all work that must be done to meet the requirements
    - Goal -> Function -> Subfunction -> Activity

## 6. Product Planning

- Product manager
    - Asks what to make and how to make it
    - Ensures the product makes business sense
    - Defines roadmap
- Product marketing
    - Asks how to best sell it
    - Ensures the product will make market and customer sense
    - Understands customer needs
- Project manager
    - Asks how to best execute a project
    - Ensures project is executed as defined
    - Performs staffing and scheduling
- Feature: a set of logically related requirements that provide a capability to the user and enable the satisfaction of business objectives
- Stakeholder: anyone who has an involvement/interest in the product
- Stakeholders
    - Management
    - Customers
    - Board of Directors
    - Legal
    - Developers
    - Investors
- Criteria for feature selection
    - Customer satisfaction
    - Cost
    - Value
    - Time
    - Frequency/ease of use
- Feature dependencies
    1. Coupling
    2. Either or
    3. At most one
    4. At least one
    5. Weak precedence
    6. Strict precedence
    7. Value dependency
    8. Effort dependency
- Resource constraints
    - Class 1: local to the release
    - Class 2: global across release periods
- Total number of stakeholder feature points (TSFP)
    - Made up of
        - Features
        - Stakeholder
        - Criteria
        - Releases
        - Plan
    - The objective of planning is to maximize the TSFP
- The diversification principle: a single solution is less likely to reflect reality when compared to a set of diverse solutions

## 7. Feature Prioritization

- Overview
    - Prioritization: arranging items in order of importance.
    - Who prioritizes?
    1. Users
    2. Developers
    3. Legislators
    4. Decision-makers
- Functional approach
    - Normalize criterion to compare
    - Associate each criterion with a weight
    - Use an aggregate function to obtain the global evaluation
    - E.g. Weighted average
    - Biggest problem is that it assumes very strong assumptions which might not match reality
    - Multi-scoring: convert verbal scores using predefined categories and compare them using a web graph.
- Relational approach
    - Doesn't require any assumptions
    - Results obtained are weaker but requires fewer assumptions
    - Uses binary relations to express the outcome of comparisons
        - x P y: x is preferred to y
        - x I y: x and y are indifferent
        - x R y: x and y are incomparable
        - P, I, and R are preference relations
    - To aggregate these relations, an assertion "a S b" is true if and only if
        - Concordance: the arguments for "a S b" are strong enough.
        - Non-discordance: the arguments against "a S b" are weak enough.
    - Partial order: if certain pairs can't be compared.
- Analytic hierarchy process (AHP)
    - Decomposes the goal into a hierarchy of criteria and sub-criteria
    - Goal > Criteria > Alternatives
- Kano method
    - Functional form of the question: if a function was provided
    - Dysfunctional form of the question: if a function wasn't provided
    - Kano table
        - Must-be (M)
        - Indifferent (I)
        - One-Dimensional (O)
        - Reverse (R)
        - Attractive (A)
        - Questionable (Q)
    - Maximize customer satisfaction and minimize customer dissatisfaction

## 8. Software Effort Estimation

- How to estimate software cost
    - Expert judgment
    - Top-down estimation
    - Empirical factor models
    - Estimation by analogy using case-based reasoning (CBR)
- Expert judgement
    - Estimate effort using experts
    - Iterate until consensus is reached
    - Inaccurate if no experts
- Top-down estimation
    - Estimate effort by reducing functions into sub-functions
    - Based on logical function rather than components implementing the function
    - Inaccurate if judgement of low-level functions is inaccurate
- Empirical factor models
    - Estimates effort using cost drivers
    - Constructive cost model (COCOMO)
        - Elements
            - Lines of code
            - Cost drivers
            - Effort equation
            - Effort adjustment factor
            - Schedule equation
        - Cost driver: a factor/attribute that drives/affects the cost of a project.
- Analogy reasoning
    - Estimates effort using past projects
    - Accurate if project data is available
    - Inaccurate if no comparable project exists

## 9. Case Studies

- Case studies: investigations that attempt to understand and explain phenomenon or to test theories.
- Pros
    - Detailed answers
    - Gain insights into cause and effect
    - Test theories
- Cons
    - Hard to find appropriate cases
    - Hard to quantify
- Reasons to conduct a case study
    - To gain a deeper understanding of a phenomenon
    - Exploration, characterization, validation
- Study design always starts with research questions
    - "How does technical debt influence development?"
    - "Why do devs prefer this tool?"
- Types of Case Studies
    - Explanatory
    - Exploratory
    - Descriptive
    - Causal
- Controlled experiments: investigate a testable hypothesis in which conditions are set up to isolate the variables of interest and test how they affect certain measurable outcomes.
- Surveys: a system for collecting information to describe, compare, or explain knowledge, behaviors over a large population.
- Pros
    - Investigating large populations
    - Testing theories where there is little control
- Cons
    - Relies on self-reported observations
    - Subjective data

## 10. Project Time Management

- Parts of time management
    - Develop and control schedule
    - Define and sequence activities
    - Estimate activity resources and durations
- Project schedule: plan that links tasks with resources to do them.
- Critical path: the sequence of project activities which add up to the longest overall duration.
- The critical path determines the shortest time possible to complete the project.
- Six key steps in the Critical Path Method (CPM)
    1. Specify each activity
    2. Establish dependencies
     - Dependency relationships
        - FS: When A finishes, B may start
        - FF: When A finishes, B may finish
        - SS: When A starts, B may start
        - SF: When A starts, B may finish
    3. Draw the network diagram
     - Critical path analysis chart (CPA) = Network diagram
    4. Estimate activity completion time
    5. Identify the critical path
     - Forward Pass: Early schedule determines early start and early finish
       - ES = max(connected EF)
       - EF = ES + Duration
     - Backward Pass: Late schedule determines late start and late finish
       - LF = min(connected LS)
       - LS = LF - Duration
     - The critical path is path of nodes where the ES = LS and EF = LF for the node.
    6. Update the critical path diagram to show progress
- CPM Pros
    - Consistent
    - Aids communication
    - Shows tasks that can be done in parallel
- CPM Cons
    - Relies on estimates and assumptions
    - Too many activities might make the diagram complicated
    - CPM doesn't guarantee project success
- Crashing an activity: special measures to reduce the duration of an activity.
- Crashing the project: specials measures to reduce the duration of the project.

## 11. Staffing

- Goal: Best match between requested and available skill profiles
- Problem
    - All features are done
    - All dependencies are fulfilled
    - Total duration minimized
- Conway's Law: organizations design systems that mirror their own communication structure.

## 12. Project Monitoring & Control

- How to bring the project back on track?
    - Behind schedule
    - Over budget
    - Poor product quality
    - Low productivity
- 5 types of project status reports
   1. Current period
   2. Cumulative
   3. Exception
   4. Stoplight
   5. Variance
- Key Performance Indicators (KPI): a set of measures used to gauge performance in terms of meeting goals.
- E.g.
    - Project completion estimation
    - Number of unresolved issues
    - Current resource allocations
- Project Control (PC): how to bring the project back on track.
- 4 M's
    - Money
    - Manpower
    - Materials
    - Machinery
- Use the 4 M's to
    - Adjust the resources
    - Adjust the project
- Heatmap: values are represented as colors.
- Kanban board: a board designed to visualize work.
- Burndown charts: chart showing work left to do versus time. Useful for predicting when work will be completed.
    - Work left on y-axis
    - Time on x-axis
- Bar chart: shows specific categories versus another measured value.
- Pareto principle: 20% of the input accounts for 80% of the output.
- Project dashboards: show KPIs.
    - Benefits
        - Facilitates communication
        - Supports decision making
        - Easy to access
        - Centralized
        - Customizable
- The ultimate goal of PC is to bring the project back on track.

## 13. Technical Debt

- Technical debt: the accumulated cost of rework needed to move from the current state to the requested state.
- Implications of technical debt
    - Product doesn't achieve full potential
    - Higher cost/effort to develop
- Technical debt is the gap between following the best practices of development and making the change work.
- Symptoms of technical debt
    - A lot of problems
    - A lot of time to fix those problems
- Code smells: systems that point to potential problems.
- Testing debt: the accumulated cost of poor testing.
- Architecture debt: unstable, not modular, too much coupling.
- Documentation debt: the accumulated cost of not keeping documentation up-to-date.

## 14. Project Monitoring & Statistical Process Control

- Detect out-of-control situations because of their impact on process performance variation.
- Process variance
    - Center process
    - Reduce spread
- Statistical process control (SPC): understand the process, causes of variation, and eliminate special cause variation.
- False positive and false negative
- Six Sigma: business philosophy focused on continuous improvement
    - Everything is a process
    - All processes have inherent variability
    - Use data to reduce variability
    - A six sigma process is one in which 99.99966% of all opportunities to produce some feature of a part are statistically expected to be free of defects
- Key terms to process variation
    - Common cause: natural variation
    - Special cause: one time/atypical variation
    - Defect: any variation that doesn't meet customer expectations
    - Specification limit: a required expectation set by the customer
- Defects per million opportunities (DPMO): the average number of defects per unit observed during an average production run, divided by the number of opportunities to make a defect on the product during that run, normalized to one million.
- DPMP = ((observed defects) / (total possible defects)) * 1,000,000

## 15. Management of Kanban and Scrum Development

- Range from highly predictive to highly adaptive

## 16. The Essence of Scrum

- Scrum: a software project management framework with
    - Short, fixed schedule per cycle
    - Repeating events and meetings
    - Practice of implementing and testing new requirements
- 3 types of Scrum stories
    - Functional
    - Non-functional
    - Defect
- Minimum viable product (MVP): min functionality with min effort that's viable by user base.
- Technology adoption lifecycle
    - Innovators
    - Early Adopters
    - Early Majority
    - Late Majority
    - Laggards
- They differ by their willingness to take risks early

## 17. Lean and Kanban

- Lean development: reduce waste to produce higher valued product
- Basics
    - Waste: adds no value
    - Value: what customers want
    - Value stream: actions to bring the project to completion
- 7 principles of lean thinking
    1. Eliminate waste
    2. Amplify learning
    3. Delay commitment
    4. Deliver fast
    5. Empower team
    6. Build integrity
    7. See the whole
- Kanban cards act as a form of "currency"
- Kanban board: Backlog -> Work-In-Progress -> Validate -> Complete
- Key of Kanban
    - Limit WIP
    - Visualize work
    - Map value stream
- Pull only what's needed, don't push everything

| Scrum                        | Kanban                    |
|------------------------------|---------------------------|
| Clock-driven                 | Event-driven              |
| Committed to scheduled work  | Ad-hoc                    |
| Velocity metric              | Lead time metric          |
| Estimate tasks               | No estimation             |
| Can't add tasks to iteration | Can add tasks at any time |
| Roles                        | No roles                  |
| Scrum board reset            | Kanban board not reset    |

## 18. Process Modeling

- Software process: a set of activities that transforms inputs into outputs.
- Modeling reasons
    - Understand
    - Communicate
    - Analyze
- 5 perspectives on process models
    1. Actual process (real): what it really is
    2. Observed process (real): what it thinks it is
    3. Desired process (model): what it wants to be
    4. Official process (model): what it says it should be
    5. Perceived process (model): what it understands it to be
- The difference between the real world and the model world
- Process of process modeling
    - State objectives and scope
    - Concept and tool selection
    - Process elicitation
    - Implement process model
    - Validate and verify model
    - Use model
- Process elicitation techniques
    - Interviews
    - Observation
    - Protocol analysis
    - Structuring techniques

## 19. Software Process Simulation

- System: a collection of elements that operate together for a common purpose.
- Model: an idealized, simplified representation of a real object.
- Simulation: to conduct experiments with a model.
- System dynamics
    - Cause effect
    - Feedback
    - Dynamics
- Verification: checks internal correctness (built right?)
- Validation: checks external correctness (right thing built?)
- V-model: Problem, Scoping, Conceptual, Encoding, Application testing, Systems testing, Unit testing

## 20. Case Studies in Software Engineering

- 6 methods to create evidence
    1. Controlled experiments
    2. Case studies: detailed exploratory investigations that seek to understand and explore phenomenon or to test theories.
    3. Surveys: a system for collecting information to describe/compare/explain knowledge over large populations.
    4. Artifact analysis: a model developed from past projects to test the effect of process innovations.
    5. Action research
    6. Simulations

## 21. Capability Maturity Model CMM

- Capability Maturity Model (CMM): process assessment method
- Maturity level: indicates process capability
- CMM levels
    1. Initial: unpredictable and reactive
    2. Repeatable: characterized and reactive
    3. Defined: proactive
    4. Managed: measured and controlled
    5. Optimizing: focus on continuous process improvement
- Key process areas
    - Software configuration management: establish and maintain integrity of products throughout the project's lifecycle.
- CMMI model: a model that helps streamline process improvement and encourage efficient behaviors to decrease risks
- CMMI addresses three areas
    - Product and service development
    - Service establishment and management
    - Product and service acquisition
