+++
title = "What makes software development slow, costly, and frustrating"
date = "2022-05-23"
type = "blog"
+++

In recent time as an architect, I've enabled teams to build and ship amazing software in conditions requiring **faster** deliveries. During the same period, I've worked on projects having somewhat loose deadlines, but the **quality and extensibility** of the software being built was a "deal-breaker".

In software architecture, trade-offs are everywhere. Using a certain kind of database might enable programmers to leverage a certain functionality **at the cost of** losing some other. Tradeoffs. This phenomenon is not only limited to "choosing X over Y". It spans over to how engineers tend to work, and how much time they dedicate to certain aspects of software development!

The term ***Technical Debt*** was first used by [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) to explain the result of prioritizing speedy delivery over perfect code. While trying to justify the refactoring of a financial application, he said:

> "If we failed to make our program align with what we then understood to be the proper way to think about our financial objects, then we were going to continue to stumble on that disagreement which is like paying interest on a loan."

This effect is especially visible in such environments where new features are added to software after their initial release. With teams rushing to ship new features *faster*, often it happens that a decision to do something wacky "for now - to be refactored later" is made. Shipping something like that is **taking a loan**, and any effort taken towards cleaning that up is an **interest** you pay.

In a well-structured codebase - let's say - it takes two days to add a new feature. If that "for now" code isn't corrected over time, the same feature might take three days to develop. That one lost day is technical debt. Cunningham also quoted that - 

> "With borrowed money, you can do something sooner than otherwise, but until you pay back the principal, you pay back the interest."

Admittedly, teams that choose faster deliveries over *better* ones project more productivity. They're building the required software in a much lesser time window and delivering them as expected. This productivity is attained by trading off design activities and focusing that time on making features. If this is the case, then is it even worth it spending time on design?

Over time, the software may get more and more feature updates, and the built-up **cruft** might slow teams down. If teams like this don't pay their interest as they continue to develop, they might even end up doing a big chunk of code rewrite. A substantial rewrite at that point can easily take up more time than what paying off the interest would have taken.

[Martin Flower](https://martinfowler.com) describes this notion in his [Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html), and I believe that it can't be more accurate than this.

![Cumulative Features and Technical Debt](/cumulativefeatures.png)

<center><small><i>from <a href="https://martinfowler.com/bliki/DesignStaminaHypothesis.html">Design Stamina Hypothesis</a> by Martin Fowler</i></small></center>

Design activities indeed take time, and that time can be spent on writing new features and focusing on time to market. Initially, the payoff of having no design can be worth it but it keeps reducing as more and more features are shipped. Design or no design, teams **will** finish their features anyway, but the reduced time to market for no design teams ends up costing more than the time saved initially. 

Spending time on software design can project decreased productivity as the payoff is not effective immediately. Having a clear design starts paying off when new features are added without losing time. A clear design can help developers get on board quickly - as opposed to having "specialists" who know that certain codebase. In a team composed of people having identical technical skills, a need to ensure the availability of "specialized" members is also a debt!

And since we're talking of practicality, it might not be a very practical idea to spend time on the design of every damn software that is being written. "One-off" tools, that are written once to be forgotten forever can safely trade design off in favor of completion. It can also be a wise idea to let go of design for components having a much smaller blast radius with a considerably low scope of cumulative features. The debt accrued for these things is much much "affordable" than that of a long-term specialized software.

On the flip side, the idea of working towards paying all of the debt at once is not a very practical one either. Losing too much time on clearing up technical debt can massively slow down delivery pipelines. Instead, teams should dedicate some of their time to cleaning the debt up, bit by bit. Remember, it is not wasted time if this effort can save a ton of it in the future. And lastly, the Architects can come up with an approach that can be used to determine the debt of software, since grounding and projecting things into numbers is an amazing way to get insights.

Finally, it is really important to realize that ***nobody builds perfect software***. Even the smartest and the most experienced teams can end up drawing on the future. The key takeaway from this big wall of text is the understanding of technical debt. It is not wrong to draw on the future, but it is equally important to work towards clearing it.

Thanks for reading. [Metallica!](https://www.youtube.com/watch?v=tAGnKpE4NCI)

---

Citations:

- Martin Fowler