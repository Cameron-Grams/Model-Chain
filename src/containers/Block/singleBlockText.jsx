import React from 'react';

export const singleBlockText = (
        <div className="css-explanationText" >
            <h1>Building a Single Block</h1>
                <p>
                    Each block is represented by a cryptographic signature derived from the data contained in the 
                    block ( in this case the data and title fields ).  The information in data and title is processed 
                    initially to produce a hash value.  A hash value is a single unique value derived 
                    mathematically from the input values. This derived hash value can act as a way to reference 
                    the inputs without actually revealing the data in the inputs.
                </p>
                <p>
                    In this case the hash value is produced by the SHA256 algorithm. Using that derived hash value as a way to reference the inputs, 
                    without actually revealing the data in the inputs, is only as strong as the algorithm that produced the hash value.
                </p>

                <p>
                    Hash values are used in many applications where unique values are needed and preceeded the blockchain. 
                    Blockchain technology expands on the concept of hash values by increasing the complexity of the derived signature; 
                    once you hit "Mine" on this demonstration you will see that a block signature is produced.  This block signature has two leading zeros.  
                    These two leading zeros are a specification of this model blockchain.  
                    The role that they play is to specify the level of difficulty required to produce the block signature; 
                    this blockchain requires that whatever data is entered must produce a signature that starts with two zeros.  
                    This is not likely to occur just using the hash algorithm with any given input data.
                </p>

                <p>
                    The SHA256 algorithm does not garentee any digits in a hash value; the input data will produce a unique hash value based on the algorithm.  
                    Producing a signature with two leading zeros is done through trial and error and adding an additional value to the input data, the "nonce" value. 
                    This nonce value is how the blockchain controls the output of the signature; the blockchain combines the input data and the nonce and tests to see if the results has two starting zeros, 
                    if it does that is the signature of the block, if it does not the nonce is changed and a new results is compared.
                </p>

                <p>
                    To summarize, this block has a signature that leads with two zeros and is the hashed value of the input data and the nonce.  
                    In a blockchain each block has a unique signature, which is how the block's integrity can be assured.
                </p>
                <p>Try entering a variety of titles and data to observe how the hash and signature change.</p>
           <h3 className="css-explanationFormat">Click anywhere to close</h3>
        </div>
    )
