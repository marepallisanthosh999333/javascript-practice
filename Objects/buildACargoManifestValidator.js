/**
Build a Cargo Manifest Validator
In this lab, you will use JavaScript to normalize and validate cargo manifests. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.

Each cargo manifest will be represented as an object with the following properties:

containerId: a positive integer identifying the associated cargo container.
destination: a non-empty string (after trimming whitespace) denoting the cargo's target destination.
weight: a positive number representing the cargo's weight.
unit: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
hazmat: a boolean value indicating whether hazardous material handling is needed.
Example cargo manifest object:

Example Code
{
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should implement a function named normalizeUnits with a manifest parameter.

The function must not mutate the original manifest object and must always return a new object where weight is normalized to kilograms and unit is set to "kg".
If the weight of the manifest object is expressed in pounds (unit: "lb"), the function should convert the weight to kilograms using the approximate conversion, 1 lb = 0.45 kg, and update the unit accordingly.
If the weight is already expressed in kilograms (unit: "kg"), the weight and unit should remain unchanged.
You should implement a function named validateManifest with a manifest parameter.

The function must not mutate the original manifest object and must always return a new object.
If the input manifest is valid (no missing or invalid properties), the function should return an empty object.
If the input manifest is not valid, the function should return an object containing entries for each missing or invalid property. Missing properties should have the value "Missing" and invalid properties should have the value "Invalid".
Example return value where the input object is missing the destination property and has an invalid weight property:

{
  destination: "Missing",
  weight: "Invalid"
}
You should implement a function named processManifest with a manifest parameter. The function should log:

If the manifest object is valid, Validation success: ${containerId} and then the manifest's weight in kilograms as such, Total weight: ${weight} kg. Use normalizeUnits() for this conversion.
If the manifest object is not valid, Validation error: ${containerId} and then the object returned by calling validateManifest() with the manifest object.
Note: each of these two cases should have two console.log() calls.

Tests:
Passed:1. You should have a function named normalizeUnits with a manifest parameter.
Passed:2. Calling normalizeUnits() with { containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true } should return the new object { containerId: 68, destination: "Salinas", weight: 45.45, unit: "kg", hazmat: true } without mutating the source input.
Passed:3. Your normalizeUnits function should return a copy of the input manifest object with its weight normalized to kilograms and its unit set to "kg". Use the approximate conversion 1 lb = 0.45 kg for the weight conversion.
Passed:4. Your normalizeUnits function should return a new copy of the input manifest object without mutating the original.
Passed:5. You should have a function named validateManifest with a manifest parameter.
Passed:6. Calling validateManifest() with { containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false } should return the new object {}.
Passed:7. If the input manifest object is valid, your validateManifest function should return an empty object {}.
Passed:8. Calling validateManifest() with {} should return the new object { containerId: "Missing", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input.
Passed:9. Calling validateManifest() with { containerId: null, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false } should return the new object { containerId: "Invalid" } without mutating the source input.
Passed:10. Calling validateManifest() with { containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" } should return the new object { containerId: "Invalid", destination: "Invalid", weight: "Invalid", unit: "Invalid", hazmat: "Invalid" } without mutating the source input.
Passed:11. Calling validateManifest() with { containerId: -2 } should return the new object { containerId: "Invalid", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input.
Passed:12. Calling validateManifest() with { containerId: 3.50 } should return the new object { containerId: "Invalid", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input. You can use Number.isInteger() to validate integer values.
Passed:13. Calling validateManifest() with { destination: "  " } should return the new object { containerId: "Missing", destination: "Invalid", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input. You can use String.trim() to remove whitespace from a string.
Passed:14. Calling validateManifest() with { weight: NaN } should return the new object { containerId: "Missing", destination: "Missing", weight: "Invalid", unit: "Missing", hazmat: "Missing" } without mutating the source input. You can use Number.isNaN() to validate NaN values.
Passed:15. If the input manifest object is not valid, your validateManifest function should return an object describing missing and/or invalid properties.
Passed:16. Your validateManifest function should return a new object without mutating the original.
Passed:17. You should have a function named processManifest with a manifest parameter.
Passed:18. Calling processManifest() with { containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false } should first log "Validation success: 55" and then log "Total weight: 180 kg".
Passed:19. If the input manifest object is valid, your processManifest function should first log the success message, Validation success: ${containerId}.
Passed:20. If the input manifest object is valid, your processManifest function should normalize it to kilograms using normalizeUnits() and then log: Total weight: ${weight} kg.
Passed:21. If the input manifest object is valid, your processManifest function should log a success message with the object's containerId, and then log the object's weight in kilograms. You should use normalizeUnits() for the conversion and have two console.log() calls.
Passed:22. Calling processManifest() with { containerId: -88, destination: "Soledad", weight: NaN } should first log Validation error: -88 and then log the object { containerId: "Invalid", weight: "Invalid", unit: "Missing", hazmat: "Missing" }.
Passed:23. Calling processManifest() with { destination: "Watsonville", hazmat: true } should first log Validation error: undefined and then log the object { containerId: "Missing", weight: "Missing", unit: "Missing" }.
Passed:24. If the input manifest object is not valid, your processManifest function should first log the error message, Validation error: ${containerId}.
Passed:25. If the input manifest object is not valid, your processManifest function should also log the object returned by calling validateManifest() with the original manifest object. Call console.log() directly with the returned object.
Passed:26. If the input manifest object is not valid, your processManifest function should log an error message with the object's containerId, and then log the object returned by calling validateManifest() with the input object. This should involve two console.log() calls.
 */
const normalizeUnits = (manifest) => {
  const newManifest = {...manifest};
  if (newManifest.unit === "lb") {
    newManifest.unit = "kg";
    newManifest.weight = newManifest.weight * 0.45;
    //console.log(manifest);
    return newManifest
  } else {
       return newManifest;
  }
}

console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }));

const validateManifest = (manifest) => {
  const errors = {};

  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};

console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));

const processManifest = (manifest) => {
  // 1. Run the validation and store the result
  const errors = validateManifest(manifest);

  // 2. Count how many properties (keys) are in the errors object
  const errorCount = Object.keys(errors).length;

  // 3. If the count is 0, it is valid!
  if (errorCount === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    
    // Call your normalizer and log the new weight
    const normalizedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } 
  // 4. Otherwise, it is invalid.
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
};