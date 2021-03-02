import assert from "assert";
import test from "ava"; 
import { circleA, circleCircumference , sphereVolume} from "./Circle_geometry.js"; 


test("Tests in progress ...", (t) => {
	t.pass();
});

test('circleA', async (t) => {
	assert.strictEqual(await circleA(5), 78.53981633974483); 
	t.pass(); 
});


test('circleCircumference', async (t) => {
	assert.strictEqual(await circleCircumference(5),  31.41592653589793); 
	t.pass(); 
});

test('sphereVolume', async (t) => {
	assert.strictEqual(await sphereVolume(5),  523.5987755982989); 
	t.pass(); 
});

