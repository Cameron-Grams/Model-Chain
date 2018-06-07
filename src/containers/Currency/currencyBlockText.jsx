import React from 'react';

export const currencyBlockText = (
        <div className="css-explanationText" >
            <h1>Cryptocurrencies and Coins: Incentives</h1>
                <p>
                    The previous description of a blockchain's Ledger features concluded by illustrating how 
                    controling a blockchain's growth, the validation of the blocks of data, controls the integrity 
                    of the data contained in the blockchain.  Modern public blockchains address this feature by 
                    making the growth and validation of the blockchain dependent on a race between those who would 
                    grow the blockchain, the "Miners".  This is done by making a copy of the blockchain available 
                    to everyone on the network and then establishing a consensus on the identity of the blockchain 
                    by all recognizing the most recent block. The effort required to produce the most recent block, 
                    validating the data in that block, is incentivized by providing the Coins or Cryptocurrency from 
                    that given blockchain. 
                </p>

                <p>
                    Cryptocurrencies or Coins, are the rewards that the blockchain records for doing the work of 
                    actually generating a block; performing the process of deriving the block signature based on the 
                    input data, previous signature and producing a unique nonce.
                </p>

                <p>
                    In this model either Miner A, B, or C will recieve 10 coins after the block is mined.  
                    This is trivial here in this model, because the block signature is only restricted by having 
                    two leading zeros, but in public blockchains the process of producing a valid block signature 
                    takes a great deal of energy to preform the trial and error of deriving the signature; this is 
                    because blockchains like Ethereum or Bitcoin may have a specification with as many as 20 leading 
                    zeros.  This requires a great deal of computing power to perform trial and error on that scale.  
                    This is why a market has developed for more and more powerful "mining rigs" to perform these calculations.
                </p>

                <p>
                    The complexity of the signature, the leading zeros, and the number of coins awarded can all be 
                    adjusted by the state of the blockchain to influence the level of effort required and rewarded 
                    to the miners.
                </p>

                <p>
                    This model chain can not be altered because none of the miners would build on a chain that has 
                    obviously invalid blocks.  This is garenteed because the miners are in competition for the coins 
                    that can be awarded for generating a new block, and the miners each have equal computing power to 
                    perform the calculations. In the wild if one miner could generate computing power equal to 51% of 
                    the total computing power in the network it would be possible for him take control of the blockchain 
                    and produce a new chain with invalid information from the common chain.  
                    This <a className="css-embededLink" href="https://www.youtube.com/watch?time_continue=1&v=7GExhA527oM" >"51% attack"</a> is the 
                    greatest threat facing blockchains.
                </p>

           <h3 className="css-explanationFormat">Click anywhere to close</h3>
        </div>
    )
