const countSquares = (numCuts) => {
	if (numCuts <= 0) return 1;
	const numCubesOnEdge = numCuts + 1;
	const cubesOnTopBottom = numCubesOnEdge * numCubesOnEdge * 2; // Determine the num of cubes on top and bottom levels
	const numSurroundingCubes = numCubesOnEdge * 4 - 4; // For the other levels, only counting the number of cubes on the outside (adding up all edges minus 4 to avoid counting the corners twice)
	const cubesWrapping = numSurroundingCubes * (numCubesOnEdge - 2) // multiply with cube height minus the outermost layers that are already accounted for
	return cubesOnTopBottom + cubesWrapping; // add up all levels
};
