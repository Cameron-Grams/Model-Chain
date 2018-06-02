import React from 'react';

export const ledgerBlockText = (
        <div className="css-explanationText" >
            <h1>Building a Block Chain: the Ledger</h1>

                <p>
                    Producing an actual blockchain from independent blocks is done by adding the previous block
                     signature to the values used to produce the current block signature.  This requires an 
                     initial "Genesis" block to start the acutal blockchain and provide a starting signature. 
                     So in a blockchain the individual blocks are established by hashing the values of the 
                     block's data, the signature of the previous block, and a nonce that creates a signature 
                     that meets the specifications.
                </p>

                <p>
                    Try creating 4 or 5 blocks and then changing one of the blocks in the middle of the chain. 
                    YOU MUST PRESS ENTER AFTER MAKING THE CHANGE. You will see that the blocks that follow the 
                    changed block are changed from green to red; it is clear based on the signature of the 
                    later blocks that they were not derived by the block that had the data changed.  
                    This is the strength of the blockchain; by having a record of blocks that have signatures 
                    based on the blocks that preceed them it is clear that none of the prior blocks have been
                    altered.  If any signature is changed the following blocks will make that clear by having 
                    invalid signatures.

                </p>
                <p>
                    As a last step try creating 4 or 5 blocks, changing one, and then adding another to the 
                    chain.  Adding an additonal block on top of the previously invalid blocks masks the fact 
                    that a block in the chain has been altered; you can see the changed data in a now green 
                    block.  If it is possible to control the creation of new blocks it is possible to control 
                    the validation of the information that they contain.  This is the greatest threat to the 
                    blockchain.  This threat is eliminated ( or minimized ) through the use of the 
                    decentralized block generation that produces cryptocurrency.
                </p>
           <h3 className="css-explanationFormat">Click anywhere to close</h3>
        </div>
    )
