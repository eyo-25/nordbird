import AppLayout from '../component/AppLayout';
import FollowList from '../component/FollowList';
import NicknameEditForm from '../component/NicknameEditForm';
import Seo from '../component/Seo';

const Profile = () => {
  const followerList = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];
  const followingList = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];
  return (
    <>
      <Seo title="Profile"></Seo>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
