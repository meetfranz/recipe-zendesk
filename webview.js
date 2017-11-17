module.exports = (Franz) => {
  const getMessages = () => {
    let count = 0;
    const el = document.querySelector('.dashboard-top-panel .indicators .stats-group .cell-value');
    if (el) {
      count = parseInt(el.innerHTML, 10);
    }

    // set Franz badge
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
