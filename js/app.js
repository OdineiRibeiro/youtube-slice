var final_url = '';

function createSlice() {
  var url = document.querySelector("input[name='youtube-url']").value;
  if (url != '') {
    var start_min = document.querySelector("input[name='start-time-min']").value;
    var start_sec = document.querySelector("input[name='start-time-sec']").value;

    if (isNaN(parseInt(start_min))) { start_min = '0' }
    if (isNaN(parseInt(start_sec))) { start_sec = '0' }

    final_url = url + `&t=${start_min}m${start_sec}s`
    var url = document.querySelector("input[name='final-url']").value = final_url;
  }
}

function openUrl() {
  if (final_url != '') {
    var win = window.open(final_url, '_blank');
    win.focus();
  }
}

document.querySelector("button[name='create-link']").addEventListener('click', createSlice);
document.querySelector("button[name='preview-video']").addEventListener('click', openUrl);
