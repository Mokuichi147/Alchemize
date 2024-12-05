import "./App.css";
import '@mdxeditor/editor/style.css'
import { BoldItalicUnderlineToggles, DiffSourceToggleWrapper, InsertTable, MDXEditor, UndoRedo, diffSourcePlugin, headingsPlugin, linkDialogPlugin, linkPlugin, listsPlugin, markdownShortcutPlugin, quotePlugin, tablePlugin, thematicBreakPlugin, toolbarPlugin } from '@mdxeditor/editor'

function App() {
  return (
    <MDXEditor
      markdown="# Hello world"
      plugins={[
        diffSourcePlugin({
          diffMarkdown: '',
          viewMode: 'rich-text'
        }),
        headingsPlugin(),
        linkDialogPlugin(),
        linkPlugin(),
        listsPlugin(),
        markdownShortcutPlugin(),
        quotePlugin(),
        tablePlugin(),
        toolbarPlugin({
          toolbarClassName: 'my-classname',
          toolbarContents: () => (
            <>
              {' '}
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <InsertTable />
              <DiffSourceToggleWrapper>
                <UndoRedo />
              </DiffSourceToggleWrapper>
            </>
          )
        }),
        thematicBreakPlugin(),
      ]}
    />
  );
}

export default App;
