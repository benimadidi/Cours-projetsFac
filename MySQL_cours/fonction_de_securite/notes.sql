
/*
    > Le chiffrement : (donnée en clair) -> clé -> (donnée chiffré)
    > Hashage        : (donnée en clair) -> (hash)

    -- HASH 
        - Un hash generer sur N bits = N/4 caractères en hexa
        - SHA2 (A utiliser) : 256 bits = 64 caractères en hexa
            - SHA2(str, length) 
                - length = 224, 256, 384, 512

*/

SELECT SHA2("bonjour", 384);

SET @pass = AES_ENCRYPT('bonjour', 'secret');
SELECT @pass;
SET @text = AES_DECRYPT(@pass, 'secret');
SELECT CAST(@text AS CHAR);
