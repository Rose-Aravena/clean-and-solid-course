
(() => {

    interface Bird {
        eat(): void;
    }

    interface FlyingBird {
        fly(): number;
    }

    interface RunningBird {
        run(): void;
    }

    interface SwimmerBird {
        swin(): void;
    }

    class Tucan implements Bird, FlyingBird {
        public fly() {return 100;}
        public eat() {}
    }

    class humminbird implements Bird, FlyingBird {
        public fly() {return 200;}
        public eat() {}
    }

    class Ostrich implements Bird, RunningBird {
        public eat() {}
        public run() {}
    }

    class Penguin implements Bird, SwimmerBird {
        public eat() {}
        public swin(){}
    }
})()