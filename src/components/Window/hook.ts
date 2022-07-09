import { useState } from 'react';
import { DraggableData, Position } from 'react-rnd';

import { useWindows } from '~/hooks';

export type UseRndProps = {
  defaultWidthPercent: number;
  defaultHeightPercent: number;
  minimized?: boolean;
};

export const useRnd = ({
  defaultWidthPercent,
  defaultHeightPercent,
  minimized,
}: UseRndProps) => {
  const { main } = useWindows();

  const [fullFilled, setFullFilled] = useState(true);
  const [fullFillMode, setFullFillMode] = useState(true);
  const [minimizeMode, setMinimizeMode] = useState(false);

  const [dragPosition, setDragPosition] = useState({
    x: ((100 - defaultWidthPercent) * main.current.clientWidth) / 200,
    y: ((100 - defaultHeightPercent) * main.current.clientHeight) / 200,
  });
  const [resizeSize, setResizeSize] = useState({
    width: `${defaultWidthPercent}%`,
    height: `${defaultHeightPercent}%`,
  });

  const position = (() => {
    if (fullFillMode) {
      return { x: 0, y: 0 };
    }

    return dragPosition;
  })();

  const size = (() => {
    if (minimized && minimizeMode) {
      return { width: '0%', height: '0%' };
    }

    if (fullFillMode) {
      return { width: '100%', height: '100%' };
    }

    return resizeSize;
  })();

  const enabled = !minimized && !minimizeMode && !fullFillMode;

  const onMinimizeEntered = () => {
    setMinimizeMode(true);
  };

  const onMiminizeExit = () => {
    setMinimizeMode(false);
  };

  const handleFullFill = () => {
    if (fullFilled) {
      setFullFilled(false);

      return;
    }

    setFullFillMode(true);
    setFullFilled(true);
  };

  const onFullFillExited = () => {
    setFullFillMode(false);
  };

  const onDragStop = (event: unknown, data: DraggableData) => {
    setDragPosition({ x: data.x, y: data.y });
  };

  const onResizeStop = (
    event: unknown,
    dir: unknown,
    ref: HTMLElement,
    delta: unknown,
    position: Position
  ) => {
    setDragPosition(position);
    setResizeSize({ width: ref.style.width, height: ref.style.height });
  };

  return {
    position,
    dragPosition,
    size,
    resizeSize,
    enabled,
    fullFilled,
    onMinimizeEntered,
    onMiminizeExit,
    handleFullFill,
    onFullFillExited,
    onDragStop,
    onResizeStop,
  };
};
