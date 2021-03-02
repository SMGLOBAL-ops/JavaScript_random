
//Area of circle
   
    export async function circleA(r) {
        return Promise.resolve(Math.PI * r * r); 
    }

// Circumference of circle

    export async function circleCircumference(r) {
        return Promise.resolve(2 * Math.PI * r); 
    }

// Sphere Volumes

    export async function sphereVolume(r) {
        return Promise.resolve((4 / 3) * Math.PI * r ** 3); 
}
