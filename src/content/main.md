# Disparity

A scalable multi-chain consensus network protocol.

### Disparity ELI18

Disparity is an attempt to solve scalability through a multi-chain framework. This multichain system would include legacy chains like Ethereum and Bitcoin - but also new child chains.

Disparity's architecture can be described as a single POS Master chain maintained by a set number of bonded validators who provide final consensus for many child chains by creating a canonical record of their states. A rotating subset of these validators will also ensure that any new state provided by a child chain is the result of a valid state transition. Several other groups of individuals act as 'fishermen' in order to police the actions of bonded validators and collect rewards in the case of malpractice on the part of the validators.

This architecture would allow child chains to send transactions to one another through the Master chain, and offer a scalable alternative to the current generation of blockchains.

In order for a Master chain validator to check the validity of a state transition inside a child chain it will be provided with a  proof of a portion of the previous state along with the new state and the transaction(s) that triggered the transition. The protocol would allow the linking of Heterogeneous child chains, that is, child chains that may be strikingly different from one another. This is because the rotating subset of validators will be capable of checking various mechanisms of state transition.

The Master Blockchain has very little actual functionality, beyond being able to transfer the tokens which back the chain. The chains main function is to create a canonical history of its own state changes and the state changes of the child chains.

As a system Disparity would bring multiple kinds of blockchain into one large network, with pooled security.

### Character Creation:

##### Delegators:

These are public network token holders - they delegate a validator and trust them with their tokens.

##### Validators

These guys validate both the master chain and a subset of Child chains. They are bonded by their tokens, or the tokens of their delegators.

##### Collators

Collators run a full node of an underlying child chain and help validators by passing them blocks for them to validate. They also monitor for new transactions from both chain users and other chains.

##### Fisherman

These guys monitor the network for invalid blocks which have been declared valid. When this happens they are able to submit a proof that a block is invalid to capture a reward from the bonded validators.

### Network in a nutshell: big, fast, spartan and extensible.

### Now read the white paper.
