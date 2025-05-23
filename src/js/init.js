let editor;

const initLibs = () => {
    initSplit();
    initAce();
};

const getAceEditor = () => editor;

const initSplit = () => {
    const split = Split(document.getElementsByClassName('split'), {
        sizes: [70, 30],
        direction: 'vertical'
    });
};

const initAce = () => {
    ace.config.set('basePath', './lib');
    editor = ace.edit(document.getElementsByClassName('editor')[0]);
    editor.session.setMode('ace/mode/html');
    editor.setTheme('ace/theme/monokai');
    editor.setFontSize(16);
    editor.setValue(getBaseHtml(), -1);
};

const getBaseHtml = () => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="author" content="Nitya Prakash Pattanaik"/>
        <title>Nitya Prakash Pattanaik | JS DOM Visualization Playground</title>
        <link rel="stylesheet" href="some-external-file.css"/>
    </head>
    <body>
        <main>Example Tag</main>
        <!-- Example comment -->
        <script>
            alert('Script tag visualization');
            // Do Something...
        </script>
        <script src="some-external-file.js"></script>
    </body>
</html>
  `;
};