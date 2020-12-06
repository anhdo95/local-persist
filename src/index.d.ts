declare module "local-persist" {
  export function get<T>(key: string): T;
  export function set<T>(key: string, value: T): boolean;
  export function remove(key: string): void;
  export function clear(): void;

  export default function accessor<T>(key: string, value?: T): void | boolean;
}
