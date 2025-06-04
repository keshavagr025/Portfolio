import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';

function PointCloudLoader() {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new PCDLoader();
    loader.load(
      '/models/generated_pointcloud.pcd',
      (points) => {
        points.name = 'pcd-points';
        scene.add(points);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened:', error);
      }
    );

    return () => {
      const obj = scene.getObjectByName('pcd-points');
      if (obj) scene.remove(obj);
    };
  }, [scene]);

  return null;
}

export default PointCloudLoader;