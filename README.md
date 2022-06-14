# Currency-frontend

## The challenge

We are a company based in Munich, Germany and are expanding internationally to the US and Switzerland. We need to price our products in CHF and USD. Our pricing team needs a dashboard that show the current value of a given amount of EUR in CHF and USD. 
We would like to have an overview of the last two weeks conversion rates in a graphical chart.

## Currency rates

You can use 3rd party APIs like https://openexchangerates.org/ or https://apilayer.com/marketplace/currency_data-api to retrieve raw currency rates.
You may simply consume the REST API or use an NPM package that that wraps it.

## Requirements

#### Functional requirements:
- be able to convert currencies from and to the target currencies mentioned above (bi-directional currency converter)
- be able to retrieve historical currency conversion rates
- show a chart of daily currency rates for a selected list of target currencies (multi-select)
- 'correct' handling of currency rates in Javascript

#### Non functional requirements:
- The app should have certain optimization levels concerning querying/data fetching.  
- Implement the necessary logic/wrapper to cover the limitation of the free plan.

## Your stack

Try to use a modern JS stack, e.g. React or Vue. You can use any boilerplate or framework you like.
Using TypeScript is highly recomended.

## Optionals

Local storage, unit tests, PWA, anything you want to show off...
