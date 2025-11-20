import heic2any from "heic2any";

/**
 * HEIC 파일을 포함한 이미지 배열을 변환합니다.
 * HEIC 파일은 JPEG로 변환하고, 다른 형식은 그대로 반환합니다.
 * 
 * @param {string[]} images - 변환할 이미지 URL 배열
 * @returns {Promise<string[]>} 변환된 이미지 URL 배열
 */
export const convertImages = async (images) => {
  try {
    const converted = await Promise.all(
      images.map(async (image) => {
        if (typeof image !== "string") return image;

        try {
          // 경로 기반으로 HEIC 파일인지 먼저 확인
          const imagePath = image.toLowerCase();
          const isHeicPath = imagePath.includes(".heic") || imagePath.includes(".heif");
          
          // HEIC 파일이 아니면 그대로 반환
          if (!isHeicPath) {
            return image;
          }

          // HEIC 파일인 경우 fetch하여 변환
          const response = await fetch(image);
          if (!response.ok) {
            console.warn("이미지 fetch 실패:", response.status, image);
            return image;
          }

          const blob = await response.blob();

          // MIME 타입으로도 확인
          const isHeicMime =
            blob.type === "image/heic" || 
            blob.type === "image/heif" ||
            blob.type === ""; // 일부 브라우저에서 MIME 타입이 비어있을 수 있음

          if (isHeicPath || isHeicMime) {
            const convertedResult = await heic2any({
              blob,
              toType: "image/jpeg",
              quality: 0.9,
            });

            const resultBlob = Array.isArray(convertedResult)
              ? convertedResult[0]
              : convertedResult;

            if (resultBlob) {
              return URL.createObjectURL(resultBlob);
            } else {
              console.warn("변환 결과가 없습니다:", image);
              return image;
            }
          }

          // HEIC가 아니면 원래 URL 그대로 사용
          return image;
        } catch (error) {
          console.error("이미지 변환 실패:", error, image);
          return image;
        }
      })
    );
    return converted;
  } catch (error) {
    console.error("이미지 변환 중 오류:", error);
    return images;
  }
};

