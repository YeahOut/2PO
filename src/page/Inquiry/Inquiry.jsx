import { useState, useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Title } from "../../components";
import {
  Button,
  QuestionForm,
  QuestionTitleInput,
  QuestionTitleSection,
  QuestionTypo,
  Root,
} from "./styled";
import { useCallback } from "react";

export const Inquiry = () => {
  const QuillRef = useRef();
  const [contents, setContents] = useState("");

  const postQuestion = useCallback(() => {
    alert("문의사항이 등록되었습니다.");
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }],
          ["image", "video", "link"],
        ],
        history: {
          delay: 500,
          maxStack: 100,
          userOnly: true,
        },
        // handlers: {
        //   image: imageHandler,
        // },
      },
    }),
    []
  );
  return (
    <Root>
      <Title
        title="문의사항"
        subtitle="궁금한 사항을 남겨주시면 24시간 내로 답변해드립니다."
      />
      <QuestionForm>
        <QuestionTitleSection>
          <QuestionTypo>Q</QuestionTypo>
          <QuestionTitleInput placeholder="제목을 입력해주세요." />
        </QuestionTitleSection>
        <ReactQuill
          ref={(element) => {
            if (element !== null) {
              QuillRef.current = element;
            }
          }}
          value={contents}
          onChange={setContents}
          modules={modules}
          theme="snow"
          placeholder="내용을 입력해주세요."
        />
        <Button onClick={postQuestion}>문의등록</Button>
      </QuestionForm>
    </Root>
  );
};
