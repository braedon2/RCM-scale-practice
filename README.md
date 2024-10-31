# RCM-scale-practice

A tool for classical guitar students to practice their scale memorization for the Royal Conservatory of Music (RCM) exams.
The tool is live on this webpage: https://braedon2.github.io/RCM-scale-practice/ 

## How the randomization works

The scales are randomized each time the page is loaded, when a level button is clicked (even if the same button is clicked multiple times), and when the reset button is clicked. 

The fingerings are not entirely random, they follow this sequence for levels 1 through 4: im, mi, am, ma, im, mi, am, ma, then the last two fingerings are random. Similarly, the first four scales will be free stroke, then the next four scales will be rest stroke, and the last two scales will have a random stroke. This ensures every combination of fingering and stroke are covered.

The next levels have additional fingerings of ai and ia so the sequence is longer: im, mi, am, ma, ia, ai, im, mi, ma, am, ia, ai (a sequence if six fingerings repeated twice), then the remaining scales have random fingerings. The first six scales will have free stroke, then the next six scales will have rest stroke, and the rest of the scales will have a random stroke. Again, this covers all possible combinations of fingerings and strokes with some random ones thrown in at the end.

Notes: the prep level does not cover all possible combinations and needs to be reworked. 
