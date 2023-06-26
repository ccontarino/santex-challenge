import { renderHook } from '@testing-library/react-hooks';
import useStateWithStorage from './useStateWithStorage';

describe('useStateWithStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return the default value when no value is stored in localStorage', () => {
    const { result } = renderHook(() => useStateWithStorage('testKey', 'testValue'));
    expect(result.current[0]).toBe('testValue');
  });

  it('should return the stored value when a value is stored in localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('storedValue'));
    const { result } = renderHook(() => useStateWithStorage('testKey', 'defaultValue'));
    expect(result.current[0]).toBe('storedValue');
  });

  it('should update the state when a new value is set', () => {
    const { result } = renderHook(() => useStateWithStorage('testKey', 'defaultValue'));
    result.current[1]('updatedValue');
    expect(result.current[0]).toBe('updatedValue');
  });
});