import { NextResponse } from 'next/server';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

interface InstagramApiResponse {
  data: Array<{
    id: string;
    media_url: string;
    permalink: string;
    caption: string;
    media_type: string;
    timestamp: string;
    like_count?: number;
    comments_count?: number;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}

export async function GET() {
  try {
    // Instagram Basic Display API configuration
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;
    
    if (!accessToken || !userId) {
      console.warn('Instagram API credentials not configured, using mock data');
      return NextResponse.json(getMockPosts());
    }

    // Fetch posts from Instagram API
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,timestamp,like_count,comments_count&access_token=${accessToken}&limit=3`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }
    
    const data: InstagramApiResponse = await response.json();
    
    // Transform the data to match our interface
    const posts: InstagramPost[] = data.data.map(post => ({
      id: post.id,
      media_url: post.media_url,
      permalink: post.permalink,
      caption: post.caption || '',
      media_type: post.media_type as 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM',
      timestamp: post.timestamp,
      like_count: post.like_count,
      comments_count: post.comments_count
    }));
    
    return NextResponse.json(posts);
    
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    
    // Return mock data as fallback
    return NextResponse.json(getMockPosts());
  }
}

function getMockPosts(): InstagramPost[] {
  return [
    {
      id: "DNvw2XcWOEc",
      media_url: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/instagram/post1.webp",
      permalink: "https://www.instagram.com/drjaishreesharad/",
      caption: "Transform your skin with our advanced treatments. Book your consultation today! ✨ #Dermatology #SkinCare #DrJaishreeSharad #BollywoodDermatologist",
      media_type: "IMAGE",
      timestamp: "2024-01-15T10:30:00Z",
      like_count: 1247,
      comments_count: 89
    },
    {
      id: "DNij3YhN_t1",
      media_url: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/instagram/post2.webp",
      permalink: "https://www.instagram.com/drjaishreesharad/",
      caption: "Natural beauty starts with healthy skin. Our PRP therapy stimulates your body's own healing factors. 🌟 #PRPTherapy #NaturalHealing #DrJaishreeSharad",
      media_type: "IMAGE",
      timestamp: "2024-01-14T15:45:00Z",
      like_count: 892,
      comments_count: 67
    },
    {
      id: "DNMyB0PR65f",
      media_url: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/instagram/post3.webp",
      permalink: "https://www.instagram.com/drjaishreesharad/",
      caption: "Laser treatments for precise skin rejuvenation. Advanced technology for optimal results. 🔬 #LaserTreatment #SkinRejuvenation #DrJaishreeSharad",
      media_type: "IMAGE",
      timestamp: "2024-01-13T12:20:00Z",
      like_count: 1567,
      comments_count: 123
    }
  ];
}
