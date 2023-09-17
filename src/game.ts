export type Outcome = {
    guess: number,
    correct: boolean,
}

export type Game = {
    sequence: number[],
    target: number,
};

export function createGame(): Game {
    const pattern = generatePattern();
    const start = random(20, 55);

    const sequence = [start];
    for (let i = 1; i < 16; ++i) {
        sequence[i] = sequence[i-1] + pattern[(i-1) % 3];
    }

    const targetIndex = random(4, 11);
    let delta;
    // Ensure that the sequence remains monotonic even with the outlier
    if (sequence[targetIndex] === sequence[targetIndex - 1]) {
        delta = 1;
    } else if (sequence[targetIndex] === sequence[targetIndex + 1]) {
        delta = -1;
    } else {
        delta = (random(0, 1) === 1) ? 1 : -1;
    }
    sequence[targetIndex] += delta;

    return { sequence, target: targetIndex };
}

function generatePattern(): number[] {
    const pattern = [
        random(1, 3),
        random(1, 3),
        random(1, 3),
    ];

    // Only allow at most one 0 in the pattern, and only in about 25% of patterns generated.
    const zeroIndex = random(0, 11);
    if (zeroIndex <= 2) {
        pattern[zeroIndex] = 0;
    }

    return pattern;
}

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}