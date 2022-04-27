### How to run
1) solana address -k target/deploy/myepicproject-keypair.json

2) add this address to lib.rs and to Anchor.toml

3) runs solana test validator
```
solana test validator
```

4) run anchor test
```
cd myepicproject
anchor test --skip-local-validator
```

## How to change programID

Make sure to delete all target folders

``` bash
anchor build
solana address -k target/deploy/myepicproject-keypair.json
anchor build
anchor test
```