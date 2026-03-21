import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, Thead, Tbody, Tr, Th, Td } from "./Table.tsx";
import { Badge } from "./Badge.tsx";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

/* ─── Example 1: Contracts table (multi-row header with grouped columns) ─── */

export const ContractsTable: Story = {
  name: "Contracts Table",
  render: () => (
    <div className="overflow-x-auto font-body">
      <Table style={{ width: 1148 }}>
        <Thead>
          {/* Row 1: group labels + rowSpan cells */}
          <Tr>
            <Th subtitle="契約者情報" rowSpan={2} style={{ width: 104 }}>
              契約者ID
            </Th>
            <Th rowSpan={2} sortable style={{ width: 140 }}>
              契約者ID
            </Th>
            <Th rowSpan={2} sortable style={{ width: 104 }}>
              注文No
            </Th>
            <Th rowSpan={2} style={{ width: 144 }}>電話番号</Th>
            <Th rowSpan={2} style={{ width: 80 }}>都道府県</Th>
            <Th subtitle="サービス利用期間" colSpan={3} />
            <Th subtitle="契約状況" colSpan={3} />
          </Tr>
          {/* Row 2: individual column titles under grouped headers */}
          <Tr>
            <Th sortable style={{ width: 98 }}>開始日</Th>
            <Th sortable style={{ width: 98 }}>終了日</Th>
            <Th style={{ width: 94 }}>アプリ連携</Th>
            <Th sortable style={{ width: 114 }}>ステータス</Th>
            <Th sortable style={{ width: 72 }}>有料</Th>
            <Th sortable style={{ width: 100 }}>無料通常</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                AA12345678
              </a>
            </Td>
            <Td>
              山田 太郎
              <br />
              ヤマダ タロウ
            </Td>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>
              自宅 000-0000-000
              <br />
              携帯 000-0000-000
            </Td>
            <Td>東京都</Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>WP</Td>
            <Td>
              <Badge label="有料" color="green" variant="strong" />
            </Td>
            <Td>1</Td>
            <Td>1</Td>
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                AA12345678
              </a>
            </Td>
            <Td>
              山田 太郎
              <br />
              ヤマダ タロウ
            </Td>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>携帯 000-0000-000</Td>
            <Td>神奈川県</Td>
            <Td>2026/01/01</Td>
            <Td>-</Td>
            <Td>WP</Td>
            <Td>
              <Badge label="有料/無料" color="yellow" variant="strong" />
            </Td>
            <Td>1</Td>
            <Td>1</Td>
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                AA12345678
              </a>
            </Td>
            <Td>
              山田 太郎
              <br />
              ヤマダ タロウ
            </Td>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>携帯 000-0000-000</Td>
            <Td>東京都</Td>
            <Td>2026/01/01</Td>
            <Td>-</Td>
            <Td>-</Td>
            <Td>
              <Badge label="有料" color="green" variant="strong" />
            </Td>
            <Td>-</Td>
            <Td>1</Td>
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                AA12345678
              </a>
            </Td>
            <Td>
              山田 太郎
              <br />
              ヤマダ タロウ
            </Td>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>
              自宅 000-0000-000
              <br />
              携帯 000-0000-000
            </Td>
            <Td>東京都</Td>
            <Td>2026/01/01</Td>
            <Td>-</Td>
            <Td>-</Td>
            <Td>
              <Badge label="従業員" color="orange" variant="strong" />
            </Td>
            <Td>-</Td>
            <Td>1</Td>
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                AA12345678
              </a>
            </Td>
            <Td>
              山田 太郎
              <br />
              ヤマダ タロウ
            </Td>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>携帯 000-0000-000</Td>
            <Td>東京都</Td>
            <Td>2026/01/01</Td>
            <Td>-</Td>
            <Td>-</Td>
            <Td>退会</Td>
            <Td>-</Td>
            <Td>1</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  ),
};

/* ─── Example 2: Pets table (single-row header) ─── */

export const PetsTable: Story = {
  name: "Pets Table",
  render: () => (
    <div className="overflow-x-auto font-body">
      <Table style={{ width: 1260 }}>
        <Thead>
          <Tr>
            <Th sortable style={{ width: 102 }}>MPPNo</Th>
            <Th style={{ width: 120 }}>お名前</Th>
            <Th style={{ width: 52 }}>種別</Th>
            <Th style={{ width: 160 }}>品種</Th>
            <Th style={{ width: 160 }}>フレンドグループ</Th>
            <Th sortable style={{ width: 114 }}>ステータス</Th>
            <Th sortable style={{ width: 114 }}>利用開始日</Th>
            <Th style={{ width: 98 }}>次回請求日</Th>
            <Th style={{ width: 100 }}>適用割引</Th>
            <Th style={{ width: 240 }}>備考</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>わんちゃん</Td>
            <Td>犬</Td>
            <Td>ウエルシュコーギー</Td>
            <Td>山田家</Td>
            <Td>
              <Badge label="有料" color="green" variant="strong" />
            </Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>DC-PP-001</Td>
            <Td>サンプルテキスト１０サンプルテキスト２０サンプルテキスト３０</Td>
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>わんちゃん</Td>
            <Td>犬</Td>
            <Td>ウエルシュコーギー</Td>
            <Td>山田家</Td>
            <Td>
              <Badge label="無料" color="neutral" variant="strong" />
            </Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>DC-PP-001</Td>
            <Td />
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>わんちゃん</Td>
            <Td>犬</Td>
            <Td>ウエルシュコーギー</Td>
            <Td>山田家</Td>
            <Td>
              <Badge label="有料C" color="orange" variant="strong" />
            </Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>DC-PP-001</Td>
            <Td />
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>わんちゃん</Td>
            <Td>犬</Td>
            <Td>ウエルシュコーギー</Td>
            <Td>山田家</Td>
            <Td>
              <Badge label="有料" color="green" variant="strong" />
            </Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>DC-PP-001</Td>
            <Td />
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>わんちゃん</Td>
            <Td>犬</Td>
            <Td>ウエルシュコーギー</Td>
            <Td>山田家</Td>
            <Td>
              <Badge label="有料" color="blue" variant="strong" />
            </Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>DC-PP-001</Td>
            <Td />
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>わんちゃん</Td>
            <Td>犬</Td>
            <Td>ウエルシュコーギー</Td>
            <Td>山田家</Td>
            <Td>
              <Badge label="有料" color="blue" variant="strong" />
            </Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>DC-PP-001</Td>
            <Td />
          </Tr>
          <Tr>
            <Td>
              <a className="text-text-link underline" href="#">
                1234567890
              </a>
            </Td>
            <Td>わんちゃん</Td>
            <Td>犬</Td>
            <Td>ウエルシュコーギー</Td>
            <Td>山田家</Td>
            <Td>
              <Badge label="有料" color="blue" variant="strong" />
            </Td>
            <Td>2026/01/01</Td>
            <Td>2026/01/01</Td>
            <Td>DC-PP-001</Td>
            <Td />
          </Tr>
        </Tbody>
      </Table>
    </div>
  ),
};
