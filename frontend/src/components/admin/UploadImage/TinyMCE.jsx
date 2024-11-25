import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
function TinyMCE(props) {
  const inputRef = useRef();
  const editorRef = useRef(null);
  const handleChange = ()=>{
    inputRef.current.value = editorRef.current.getContent();
    props.onchangeData(inputRef.current)
  }
  return (
    <>
    <input name="description" type="hidden" ref={inputRef} />
    <Editor onChange={handleChange}
      onInit={(_evt, editor) => {
        editorRef.current = editor;
      }}
      apiKey="1stpzev07oj2hej4uo35alebe127604u356mvveaqpjfib7n"
      initialValue= {props.content}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize fontsizeinput |" +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        font_size_formats: "8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 21pt 22pt 24pt 26pt 28pt 30pt 34pt 36pt 40pt",
      }}
    
    />
    
    </>
  );
}
export default TinyMCE;
