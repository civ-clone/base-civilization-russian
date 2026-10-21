import { CatherineTheGreat, JosephStalin } from '../Leaders';
import Russian from '../Russian';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Russian', (): void => {
  it('has its people, nation and colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Russian)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Russian');
    expect(attributes.nation).to.equal('Russia');
    // The first fills a unit's shield and a city's square; the second is the shield's edge and the city.
    expect(attributes.colors).to.eql(['#8E2420', '#F5C342']);
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Russian);

    expect(cityNames.length).to.be.at.least(20);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Moscow']);
  });

  it('has its leaders', (): void => {
    (
      [
        [CatherineTheGreat, 'Catherine the Great'],
        [JosephStalin, 'Joseph Stalin'],
      ] as [typeof Leader, string][]
    ).forEach(([LeaderType, name]) => {
      expect(LeaderType.civilization()).to.equal(Russian);
      expect(new LeaderType().name()).to.equal(name);
    });
  });
});
