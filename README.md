# jsii go performance profiling

This repo started as a clone of https://github.com/hashicorp/cdktf-provider-aws and was modified to be able to profile it.

## Setup
```
# after cloning this repo
yarn install
```

## Reproduction

### Creating memory snapshots
Requires at least Node.js `v14.18.0` or `v15.1.0` ([docs](https://nodejs.org/api/cli.html#--heapsnapshot-near-heap-limitmax_count))

```
node --max-old-space-size=500 --heapsnapshot-near-heap-limit=3 ./node_modules/jsii-pacmak/bin/jsii-pacmak.js -v --target go
node --max-old-space-size=6000 --heapsnapshot-near-heap-limit=3 ./node_modules/jsii-pacmak/bin/jsii-pacmak.js -v --target go
node --max-old-space-size=10000 --heap-prof ./node_modules/jsii-pacmak/bin/jsii-pacmak.js -v --target go
```