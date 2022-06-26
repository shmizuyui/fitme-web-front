import { useRouter } from "next/router";
import { Errors } from "../../../components/common/Errors";
import { GlobalContainer } from "../../../components/common/GlobalContainer";
import { Loading } from "../../../components/common/Loading";
import { LessonDetail } from "../../../components/pages/user/lessons/Lessons/LessonDetail";
import { useLesson } from "../../../hooks/user/useLesson";

const Lesson = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useLesson(String(id));

  if (error) return <Errors>{error}</Errors>;

  return (
    <GlobalContainer title="レッスン詳細">
      {isLoading ? <Loading /> : <LessonDetail lesson={data.lesson} />}
    </GlobalContainer>
  );
};

export default Lesson;
