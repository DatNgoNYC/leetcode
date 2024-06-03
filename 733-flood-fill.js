/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    if (image[sr][sc] == color) return image;

    const pixelsToFlood = [[sr, sc]] // create a queue to add the pixels to paint
    const ogColor = image[sr][sc]
    const rowCount = image.length
    const colCount = image[0].length

    while (pixelsToFlood.length) {
        const [x, y] = pixelsToFlood.shift();

        // First, check if the current pixel is out of bounds or not the original color.
        if (x < 0 || x >= rowCount || y < 0 || y >= colCount || image[x][y] !== ogColor) continue;

        image[x][y] = color; // Update the color of the current pixel.

        // Add adjacent pixels to the queue.
        pixelsToFlood.push([x, y + 1]); // Right
        pixelsToFlood.push([x, y - 1]); // Left
        pixelsToFlood.push([x + 1, y]); // Down
        pixelsToFlood.push([x - 1, y]); // Up
    }

    return image
};