export default class FirstClass {
    protected name: string = 'name from FirstClass';
    // public constructor(theName: string) { this.name = theName; }
    public moveMove(distanceInMeters: number) {
        // console.log(`${this.name} moved ${distanceInMeters}m.`);
        console.log(`moved ${distanceInMeters}m.`);
    }
}
