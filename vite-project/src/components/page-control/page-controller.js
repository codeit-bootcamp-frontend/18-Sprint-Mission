function calculateVisiblePages(
  isLastGroup,
  numberOfPages,
  numberOfPagesInGroup,
  currentGroupIndex
) {
  const visibleCount = isLastGroup
    ? numberOfPages % numberOfPagesInGroup
    : numberOfPagesInGroup;

  return Array.from(
    { length: visibleCount },
    (_, index) => index + 1 + numberOfPagesInGroup * currentGroupIndex
  );
}

function PageController(numberOfPages, currentPage, numberOfPagesInGroup = 5) {
  const numberOfGroups = Math.ceil(numberOfPages / numberOfPagesInGroup);
  const currentGroupIndex = Math.floor(
    (currentPage - 1) / numberOfPagesInGroup
  );
  
  const isFirstGroup = currentGroupIndex === 0;
  const isLastGroup = currentGroupIndex === numberOfGroups - 1;

  const visiblePages = calculateVisiblePages(
    isLastGroup,
    numberOfPages,
    numberOfPagesInGroup,
    currentGroupIndex
  );

  const prevGroupPage = 5 * currentGroupIndex;
  const nextGroupPage = 1 + numberOfPagesInGroup * (currentGroupIndex + 1);

  return {
    isFirstGroup,
    isLastGroup,
    visiblePages,
    prevGroupPage,
    nextGroupPage,
  };
}

export default PageController;
