
import { Orchestrator, Player, Cell } from "@holochain/tryorama";
import { config, installation, sleep } from '../../utils';

export default (orchestrator: Orchestrator<any>) =>  {
  
  orchestrator.registerScenario("usage_block CRUD tests", async (s, t) => {
    // Declare two players using the previously specified config, nicknaming them "alice" and "bob"
    // note that the first argument to players is just an array conductor configs that that will
    // be used to spin up the conductor processes which are returned in a matching array.
    const [alice_player, bob_player]: Player[] = await s.players([config, config]);

    // install your happs into the conductors and destructuring the returned happ data using the same
    // array structure as you created in your installation array.
    const [[alice_happ]] = await alice_player.installAgentsHapps(installation);
    const [[bob_happ]] = await bob_player.installAgentsHapps(installation);

    await s.shareAllNodes([alice_player, bob_player]);

    const alice = alice_happ.cells.find(cell => cell.cellRole.includes('/energy_monitor.dna')) as Cell;
    const bob = bob_happ.cells.find(cell => cell.cellRole.includes('/energy_monitor.dna')) as Cell;

    const entryContents = {
  "endBlockTime": 1650370254749,
  "blockLength": "It's nice to play a character that has a soulful, dependent, close relationship. What do they got in there? I've crashed into a beet truck.",
  "householdUsage": "hands faster on",
  "solarGenerated": "chance fat part",
  "batteryCharged": "scientists so Just",
  "batteryDischarged": "your faster Yeah",
  "ioenSupplied": "interesting truck It",
  "ioenConsumed": "fat beet Must",
  "gridConsumed": "maybe are know"
};

    // Alice creates a usage_block
    const create_output = await alice.call(
        "usage_logger",
        "create_usage_block",
        entryContents
    );
    t.ok(create_output.headerHash);
    t.ok(create_output.entryHash);

    await sleep(200);
    
    // Bob gets the created usage_block
    const entry = await bob.call("usage_logger", "get_usage_block", create_output.entryHash);
    t.deepEqual(entry, entryContents);
    
    
    
  });

}
