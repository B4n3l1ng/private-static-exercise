// Iteration 1: Rocket Class
class Rocket {
  // Constructor should take a name parameter
  // Add a private property #fuel (initialize to 100)
  // Add a private method #burnFuel(amount) to decrease fuel
  // Add a public method launch() that checks fuel before launching
}

// Iteration 2: MissionControl Class
class MissionControl {
  // Add a static property rocketsLaunched (initialize to 0)
  // Add a static method registerLaunch(rocket) to launch rockets
  // Only increment if the rocket successfully launched
}

// Iteration 3: Creating objects and running the simulation

// Create two Rocket objects
let rocket1;
let rocket2;

// Tests

console.log('*** TEST 1: Launch Attempts ***');
// Call MissionControl.registerLaunch() for each rocket
// Try launching a rocket1 again to check fuel behavior
// Expected: "Falcon 9 has launched into space!"
// Expected: "Starship has launched into space!"
// Expected: "Falcon 9 cannot launch due to low fuel!"
console.log('\n*** TEST 2: Rockets Launched Count ***');
// Log the total launches using MissionControl.rocketsLaunched
// Expected: "Total successful launches: 2"
