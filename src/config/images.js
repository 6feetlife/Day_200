/**
 * 네이버 클라우드 스토리지에서 이미지를 가져오는 설정
 */

// 환경 변수에서 스토리지 URL 가져오기
const STORAGE_BASE_URL = import.meta.env.VITE_NCP_STORAGE_URL || '';

/**
 * 이미지 경로를 완전한 URL로 변환
 * @param {string} path - 이미지 경로 (예: "everland/everland_01.jpg")
 * @returns {string} 완전한 URL
 */
export const getImageUrl = (path) => {
  if (!path) return '';
  
  // 이미 완전한 URL인 경우 그대로 반환
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // 상대 경로인 경우 스토리지 URL과 결합
  const baseUrl = STORAGE_BASE_URL.endsWith('/') 
    ? STORAGE_BASE_URL.slice(0, -1) 
    : STORAGE_BASE_URL;
  
  const imagePath = path.startsWith('/') ? path.slice(1) : path;
  
  const fullUrl = `${baseUrl}/${imagePath}`;
  
  // 디버깅: 개발 환경에서만 콘솔 출력
  if (import.meta.env.DEV) {
    console.log(`[getImageUrl] path: ${path}, fullUrl: ${fullUrl}`);
  }
  
  return fullUrl;
};

/**
 * 이미지 배열을 URL 배열로 변환
 * @param {string[]} paths - 이미지 경로 배열
 * @returns {string[]} URL 배열
 */
export const getImageUrls = (paths) => {
  return paths.map(path => getImageUrl(path));
};

// 이미지 경로 상수 정의
// 주의: landing, photoBook, letterBack, bye는 로컬 assets에서 사용
// 나머지 이미지들만 네이버 클라우드 스토리지에서 가져옵니다
export const IMAGE_PATHS = {
  // 에버랜드 이미지들
  everland: [
    'everland/everland_01.jpg',
    'everland/everland_02.jpg',
    'everland/everland_03.jpg',
    'everland/everland_04.jpg',
    'everland/everland_05.jpg',
    'everland/everland_06.jpeg',
    'everland/everland_07.jpg',
  ],
  
  // 포장마차 이미지들
  streetFood: [
    'streetFood/streetFood_01.jpg',
    'streetFood/streetFood_02.jpg',
    'streetFood/streetFood_03.jpg',
  ],
  
  // 양평 이미지들
  yangpyeong: [
    'yangpyeong/yangpyeong_01.jpg',
    'yangpyeong/yangpyeong_02.jpg',
    'yangpyeong/yangpyeong_03.jpg',
    'yangpyeong/yangpyeong_04.jpg',
    'yangpyeong/yangpyeong_05.jpg',
    'yangpyeong/yangpyeong_06.jpg',
    'yangpyeong/yangpyeong_07.jpg',
    'yangpyeong/yangpyeong_08.jpg',
    'yangpyeong/yangpyeong_09.jpg',
    'yangpyeong/yangpyeong_10.jpg',
    'yangpyeong/yangpyeong_11.jpg',
    'yangpyeong/yangpyeong_12.jpg',
  ],
  
  // 대부도 이미지들
  daebudo: [
    'daebudo/daebudo_01.jpg',
    'daebudo/daebudo_02.jpg',
    'daebudo/daebudo_03.jpg',
    'daebudo/daebudo_04.jpg',
    'daebudo/daebudo_05.jpeg',
    'daebudo/daebudo_06.jpeg',
    'daebudo/daebudo_07.jpg',
    'daebudo/daebudo_08.jpg',
    'daebudo/daebudo_09.jpg',
    'daebudo/daebudo_10.jpg',
    'daebudo/daebudo_11.jpg',
    'daebudo/daebudo_12.jpg',
    'daebudo/daebudo_13.jpg',
    'daebudo/daebudo_14.jpg',
    'daebudo/daebudo_15.jpg',
  ],
  
  // 서울 이미지들
  seoul: [
    'seoul/seoul_01.jpg',
    'seoul/seoul_02.JPG',
    'seoul/seoul_03.jpg',
    'seoul/seoul_04.jpg',
    'seoul/seoul_05.jpg',
    'seoul/seoul_06.jpeg',
    'seoul/seoul_07.jpg',
    'seoul/seoul_08.jpg',
    'seoul/seoul_09.jpg',
    'seoul/seoul_10.jpeg',
    'seoul/seoul_11.jpg',
    'seoul/seoul_12.jpg',
    'seoul/seoul_13.jpeg',
    'seoul/seoul_14.jpeg',
    'seoul/seoul_15.jpg',
    'seoul/seoul_16.jpg',
    'seoul/seoul_17.jpg',
    'seoul/seoul_18.jpg',
    'seoul/seoul_19.jpeg',
    'seoul/seoul_20.jpeg',
  ],
  
  // 평택 이미지들
  pyeongtaek: [
    'pyeongtaek/pyeongtaek_01.jpg',
    'pyeongtaek/pyeongtaek_02.jpg',
    'pyeongtaek/pyeongtaek_03.jpg',
    'pyeongtaek/pyeongtaek_04.jpg',
    'pyeongtaek/pyeongtaek_05.jpeg',
    'pyeongtaek/pyeongtaek_06.jpeg',
    'pyeongtaek/pyeongtaek_07.jpeg',
    'pyeongtaek/pyeongtaek_08.jpeg',
    'pyeongtaek/pyeongtaek_09.jpeg',
  ],
  
  // 삽교 이미지들
  sapgyo: [
    'sapgyo/sapgyo_01.jpg',
    'sapgyo/sapgyo_02.jpeg',
    'sapgyo/sapgyo_03.jpeg',
    'sapgyo/sapgyo_04.jpeg',
    'sapgyo/sapgyo_05.jpg',
    'sapgyo/sapgyo_06.jpg',
    'sapgyo/sapgyo_07.jpeg',
    'sapgyo/sapgyo_08.jpeg',
    'sapgyo/sapgyo_09.jpeg',
    'sapgyo/sapgyo_10.jpg',
    'sapgyo/sapgyo_11.jpg',
    'sapgyo/sapgyo_12.jpg',
    'sapgyo/sapgyo_13.jpg',
    'sapgyo/sapgyo_14.jpg',
    'sapgyo/sapgyo_15.jpg',
    'sapgyo/sapgyo_16.jpg',
    'sapgyo/sapgyo_17.jpg',
    'sapgyo/sapgyo_18.jpg',
    'sapgyo/sapgyo_19.jpg',
    'sapgyo/sapgyo_20.jpg',
  ],
  
  // 가을 이미지들
  fall: [
    'fall/fall_01.jpg',
    'fall/fall_02.jpg',
    'fall/fall_03.jpg',
    'fall/fall_04.jpg',
    'fall/fall_05.jpg',
    'fall/fall_06.jpg',
    'fall/fall_07.jpg',
    'fall/fall_08.jpg',
    'fall/fall_09.jpg',
    'fall/fall_10.jpg',
  ],
};

// 편의 함수: 특정 카테고리의 이미지 URL 배열 가져오기
export const getCategoryImages = (category) => {
  const paths = IMAGE_PATHS[category];
  if (!paths) return [];
  return Array.isArray(paths) ? getImageUrls(paths) : [getImageUrl(paths)];
};

// 편의 함수: 단일 이미지 URL 가져오기
export const getCategoryImage = (category, index = 0) => {
  const paths = IMAGE_PATHS[category];
  if (!paths) return '';
  if (Array.isArray(paths)) {
    return getImageUrl(paths[index] || paths[0]);
  }
  return getImageUrl(paths);
};

