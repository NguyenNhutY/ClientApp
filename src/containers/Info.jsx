import React from 'react';
import Feature from './../components/Feature';
import '../styles/Info.css';

const Info = () => (
  <div className="info section__margin" id="info">
    <div className="info-feature">
            <Feature title="Giới Thiệu" text="Chúng tôi cung cấp các khóa học lái xe chất lượng và đáng tin cậy để giúp bạn trở thành một lái xe an toàn và tự tin. Dù bạn mới bắt đầu hoặc muốn cải thiện kỹ năng lái xe của mình, chúng tôi đều có các khóa học phù hợp với nhu cầu của bạn.
Hãy khám phá các khóa học của chúng tôi ngay hôm nay và bắt đầu hành trình của bạn để có được bằng lái xe!" />
    </div>
    <div className="info-heading">
      <h1 className="">Cấu trúc bài thi </h1>
    </div>
    <div className="info-container">
            <Feature classNam="features-container__feature" title="Thời Gian" text="Thời gian làm bài: 26 phút" />
            <Feature classNam="features-container__feature" title="Số lượng" text="Số lượng câu hỏi: 45 câu." />
            <Feature classNam="features-container__feature" title="Tổng Thể" text="Số câu hỏi cần trả lời đúng: 41/45 câu là ĐẠT." />
            <Feature classNam="features-container__feature" title="Cấu trúc" text="Mỗi câu hỏi có từ 2 – 4 sự lựa chọn nhưng chỉ có 01 đáp án đúng"/>
    </div>
  </div>
);

export default Info;
