export const ro = new ResizeObserver(entries => {
    entries.forEach(entry => {
      //entry.target.resizedCallback(entry.contentRect);
      const event = new CustomEvent('brk-resized', { detail: entry.contentRect });
      entry.target.dispatchEvent(event);
    });
  });
  