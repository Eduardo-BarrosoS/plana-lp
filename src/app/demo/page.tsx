/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Home,
  Info,
  PackagePlus,
  Save, // Added Save icon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CustomizationType, OptionType, Room } from "@/lib/types/demo";
import { mockOptionsData, mockRoomsData } from "@/lib/constants/demo";
import Image from "next/image";

// --- HELPER ---
function NumberToPrice(value: string | number) {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return new Intl.NumberFormat("pt-BR", options).format(Number(value));
}

// --- CONSTANTS ---
const PLACEHOLDER_IMAGE =
  "https://qzhzsaqzsgegpvhejxgb.supabase.co/storage/v1/object/public/plana-images/internal/plana-placeholder-image.svg";

const API_18N = {
  FINISH: {
    ILLUSTRATIVE_IMAGE: "Imagens meramente ilustrativas",
  },
  CUSTOMIZATION: {
    CLIENT: {
      BUTTON_FINISH: "Prosseguir",
    },
  },
};

// --- TYPES ---

const mockUnitData = {
  plan: { title: "Planta Padrão", price: "50000" },
  project: { maxInstallments: 12 },
};

// --- TYPE FOR SELECTIONS ---
type EnvironmentSelections = Record<string, Record<string, OptionType | null>>;

// --- MAIN COMPONENT ---
export default function ApartmentCustomizer() {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(true);
  const [isPlanInfoVisible, setIsPlanInfoVisible] = useState(false);
  const [environmentSelections, setEnvironmentSelections] =
    useState<EnvironmentSelections>({});
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(
    mockRoomsData[0] ?? null,
  );
  const [selectedCustomization, setSelectedCustomization] =
    useState<CustomizationType | null>(
      mockRoomsData[0]?.customizations[0] ?? null,
    );

  const [hasUnsavedChangesForRoom, setHasUnsavedChangesForRoom] =
    useState(false);

  const optionData = useMemo(() => {
    if (!selectedCustomization) return [];
    return mockOptionsData[selectedCustomization.id] || [];
  }, [selectedCustomization]);

  // --- EVENT HANDLERS ---
  const onTogglePanel = () => setIsPanelOpen((prev) => !prev);
  const handleGoHome = () => alert("Voltando para a página inicial...");
  const handleSaveChanges = () => setHasUnsavedChangesForRoom(false);

  const onOptionSelect = (customizationId: string, opt: OptionType) => {
    if (!selectedRoom) return;
    setEnvironmentSelections((prev) => ({
      ...prev,
      [selectedRoom.id]: {
        ...(prev[selectedRoom.id] ?? {}),
        [customizationId]: opt,
      },
    }));
  };

  const onChangeRoom = (room: Room) => {
    setSelectedRoom(room);
    setSelectedCustomization(room.customizations[0] ?? null);
  };

  const onCustomizationTabChange = (customId: string) => {
    if (!selectedRoom?.customizations || customId === selectedCustomization?.id)
      return;
    const found = selectedRoom.customizations.find((c) => c.id === customId);
    setSelectedCustomization(found ?? null);
  };

  const onFinishCustomization = () => {
    console.log("Final Selections:", environmentSelections);
    console.log("Total Price of Extras:", totalPrice);
    alert("Personalização finalizada! Verifique o console para ver os dados.");
  };

  // --- DERIVED STATE & CALCULATIONS ---
  const totalPrice = Object.values(environmentSelections)
    .flatMap((roomSelections) => Object.values(roomSelections))
    .reduce(
      (sum, selectedOpt) =>
        sum + (selectedOpt?.price ? Number(selectedOpt.price) : 0),
      0,
    );

  const isRoomCustomizationComplete = (roomId: string): boolean => {
    const room = mockRoomsData.find((r) => r.id === roomId);
    if (!room?.customizations?.length) return true;
    const selections = environmentSelections[roomId] ?? {};
    return room.customizations.every((c) => selections[c.id] !== undefined);
  };

  const getRoomCompletedCount = (roomId: string): number => {
    const room = mockRoomsData.find((r) => r.id === roomId);
    if (!room?.customizations?.length) return 0;
    const selections = environmentSelections[roomId] ?? {};
    return Object.keys(selections).length;
  };

  const isAllRoomsComplete = mockRoomsData.every((room) =>
    isRoomCustomizationComplete(room.id),
  );
  const currentRoomSelections = selectedRoom
    ? (environmentSelections[selectedRoom.id] ?? {})
    : {};

  const selectedOptionImages = useMemo(() => {
    const customizations = selectedRoom?.customizations ?? [];
    return Object.values(currentRoomSelections)
      .filter((opt): opt is NonNullable<OptionType> => !!opt)
      .map((opt) => ({
        url: opt.image,
        zIndex:
          customizations.find((c) => c.id === opt.customizationId)?.zIndex ?? 0,
      }))
      .filter((imgObj) => Boolean(imgObj.url))
      .sort((a, b) => a.zIndex - b.zIndex);
  }, [selectedRoom?.customizations, currentRoomSelections]);

  useEffect(
    () => setHasUnsavedChangesForRoom(true),
    [selectedCustomization, selectedRoom, selectedOptionImages],
  );
  if (!selectedRoom) return <div>Carregando...</div>;

  return (
    <div className="bg-background relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src={selectedRoom?.image ?? PLACEHOLDER_IMAGE}
          alt={selectedRoom?.title ?? ""}
          style={{ zIndex: 0 }}
          fill
          priority
          className="absolute inset-0 h-full w-full object-contain"
        />
        {selectedOptionImages.map((selOpt, i) => (
          <Image
            key={i}
            src={selOpt.url ?? PLACEHOLDER_IMAGE}
            alt={selectedRoom?.title ?? ""}
            style={{ zIndex: selOpt.zIndex + 10 }}
            fill
            priority
            className="absolute inset-0 h-full w-full object-contain"
          />
        ))}
      </div>

      <button
        onClick={onTogglePanel}
        className="bg-background/80 absolute top-1/2 z-40 -translate-y-1/2 rounded-r-lg p-2 shadow-lg duration-300 hover:bg-white"
        style={{ left: isPanelOpen ? "320px" : "0" }}
      >
        {isPanelOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>

      <div
        className={cn(
          "absolute top-0 left-0 z-30 h-full shadow-xl transition-all duration-300",
          isPanelOpen ? "w-80" : "w-0",
        )}
      >
        {isPanelOpen && (
          <div className="bg-background/90 flex h-full flex-col backdrop-blur-sm">
            <div className="flex-1 overflow-auto">
              <div className="p-4">
                <div className="mb-6 flex items-center justify-between">
                  <h1 className="text-xl font-bold">Personalização</h1>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={handleGoHome}
                      title="Voltar para a página inicial"
                    >
                      <Home className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={cn(
                        "text-muted-foreground relative h-9 w-9",
                        hasUnsavedChangesForRoom &&
                          "border-primary text-primary",
                      )} // Simplified style
                      onClick={handleSaveChanges}
                      disabled={!hasUnsavedChangesForRoom}
                      title="Salvar alterações"
                    >
                      <Save className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="my-6">
                  <h2 className="mb-2 text-base font-semibold">Ambientes</h2>
                  <div className="flex gap-2 overflow-x-auto p-2">
                    {mockRoomsData.map((room) => {
                      const isComplete = isRoomCustomizationComplete(room.id);
                      const completedCount = getRoomCompletedCount(room.id);
                      const totalCount = room.customizations?.length ?? 0;
                      return (
                        <button
                          key={room.id}
                          onClick={() => onChangeRoom(room)}
                          className={cn(
                            "relative flex h-auto flex-shrink-0 flex-col items-center rounded-xl px-3 py-3 text-sm whitespace-nowrap",
                            selectedRoom?.id === room.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80",
                          )}
                        >
                          {isComplete && (
                            <div className="absolute -top-1 -right-1 rounded-full bg-green-500 p-0.5 text-white">
                              <CheckCircle2 className="h-3 w-3" />
                            </div>
                          )}
                          <span>{room.title}</span>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-[11px] opacity-80">
                              {!!room?.area && `${room.area}m²`}
                            </span>
                            {totalCount > 0 && (
                              <Badge
                                variant="outline"
                                className={cn(
                                  "ml-1 h-4 px-1 text-[9px]",
                                  isComplete
                                    ? "border-green-300 bg-green-100 text-green-800"
                                    : "border-amber-300 bg-amber-100 text-amber-800",
                                )}
                              >
                                {completedCount}/{totalCount}
                              </Badge>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedRoom?.customizations?.length ? (
                  <Tabs
                    value={selectedCustomization?.id}
                    onValueChange={onCustomizationTabChange}
                  >
                    <div className="relative mt-2 h-fit">
                      <TabsList className="h-full w-full rounded-lg">
                        <div className="flex w-full items-center gap-3 overflow-x-auto px-1 py-2">
                          {selectedRoom.customizations.map((custom) => (
                            <TabsTrigger
                              key={custom.id}
                              value={custom.id}
                              className={cn(
                                "relative flex-shrink-0 rounded-xl border border-neutral-100 py-2 text-sm whitespace-nowrap dark:border-neutral-900",
                                selectedCustomization?.id === custom.id &&
                                  "!bg-black !text-white",
                              )}
                            >
                              {custom.title}
                              {currentRoomSelections[custom.id] !==
                                undefined && (
                                <div className="absolute -top-0.5 -right-0.5 rounded-full bg-green-500 p-0.5 text-white shadow-sm">
                                  <Check className="h-2.5 w-2.5" />
                                </div>
                              )}
                            </TabsTrigger>
                          ))}
                        </div>
                      </TabsList>
                    </div>
                    <p className="text-muted-foreground mt-2 text-center text-sm italic">
                      {API_18N.FINISH.ILLUSTRATIVE_IMAGE}
                    </p>
                    {selectedRoom.customizations.map((custom) => (
                      <TabsContent key={custom.id} value={custom.id}>
                        <RadioGroup
                          value={currentRoomSelections[custom.id]?.id}
                          className="grid grid-cols-1 gap-4 pb-2"
                        >
                          {optionData.length ? (
                            optionData.map((opt) => (
                              <div
                                key={opt.id}
                                className={cn(
                                  "relative cursor-pointer overflow-hidden rounded-xl border transition-all hover:shadow-md",
                                  currentRoomSelections[custom.id]?.id ===
                                    opt.id
                                    ? "border-primary ring-primary ring-2"
                                    : "border-muted hover:border-gray-300",
                                )}
                                onClick={() => onOptionSelect(custom.id, opt)}
                              >
                                {currentRoomSelections[custom.id]?.id ===
                                  opt.id && (
                                  <div className="absolute top-2 right-2 z-10 rounded-full bg-green-500 p-1 text-white">
                                    <Check className="h-3.5 w-3.5" />
                                  </div>
                                )}
                                <div className="relative h-32 w-full">
                                  <img
                                    src={opt.supplierImage ?? PLACEHOLDER_IMAGE}
                                    alt={opt.title}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="bg-background border-t p-3">
                                  <Label
                                    htmlFor={opt.id}
                                    className="mb-2 block text-sm font-medium"
                                  >
                                    {opt.title}
                                  </Label>
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold">
                                      {NumberToPrice(Number(opt.price))}
                                    </span>
                                    {opt.supplierLink && (
                                      <a
                                        href={opt.supplierLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          className="h-8 w-8"
                                          title="Informações sobre a opção"
                                        >
                                          <Info className="h-4 w-4" />
                                          <span className="sr-only">Info</span>
                                        </Button>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <Card className="mt-4 border-dashed">
                              <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                                <div className="bg-muted mb-3 rounded-full p-3">
                                  <PackagePlus className="text-muted-foreground h-8 w-8" />
                                </div>
                                <h3 className="mb-2 text-base font-medium">
                                  Nenhuma opção disponível
                                </h3>
                                <p className="text-muted-foreground max-w-xs text-xs">
                                  Não há opções para &quot;
                                  {selectedCustomization?.title.toLowerCase()}
                                  &quot;.
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => alert("Solicitar opções")}
                                >
                                  Solicitar opções
                                </Button>
                              </CardContent>
                            </Card>
                          )}
                        </RadioGroup>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  <p className="text-xs italic">
                    Este ambiente não possui personalizações disponíveis.
                  </p>
                )}
              </div>
            </div>

            <div className="bg-background flex-shrink-0 border-t p-4 pt-2 shadow-md">
              <div
                className={cn(
                  "flex cursor-pointer items-center justify-between",
                  isPlanInfoVisible && "mb-2",
                )}
                onClick={() => setIsPlanInfoVisible((prev) => !prev)}
              >
                <span className="text-xs font-medium">
                  Informações da planta
                </span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      isPlanInfoVisible && "rotate-90",
                    )}
                  />
                </Button>
              </div>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isPlanInfoVisible
                    ? "mb-3 max-h-40 opacity-100"
                    : "max-h-0 opacity-0",
                )}
              >
                <div className="bg-muted/50 mb-2 rounded-lg p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">
                      Planta selecionado:
                    </span>
                    <span className="text-sm font-medium">
                      {mockUnitData.plan.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">
                      Preço da planta:
                    </span>
                    <span className="text-sm font-medium">
                      {NumberToPrice(mockUnitData.plan.price)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">
                      Total:
                    </span>
                    {!!mockUnitData.project?.maxInstallments &&
                      !!mockUnitData.plan?.price && (
                        <span className="text-sm font-medium text-green-400">
                          Até {mockUnitData.project.maxInstallments}x de{" "}
                          {NumberToPrice(
                            (Number(mockUnitData.plan.price) + totalPrice) /
                              Number(mockUnitData.project.maxInstallments),
                          )}
                        </span>
                      )}
                  </div>
                </div>
              </div>
              <Separator className="my-3" />
              <div className="mb-4 flex justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-medium">
                    Preço das escolhas:
                  </span>
                  <span className="text-muted-foreground text-xs font-light">
                    {NumberToPrice(totalPrice)}
                  </span>
                  {!!mockUnitData.project?.maxInstallments && (
                    <span className="text-lg font-bold">
                      Até {mockUnitData.project.maxInstallments}x de{" "}
                      {NumberToPrice(
                        totalPrice /
                          Number(mockUnitData.project.maxInstallments),
                      )}
                    </span>
                  )}
                </div>
              </div>
              <Button
                className="w-full"
                onClick={onFinishCustomization}
                disabled={!isAllRoomsComplete}
              >
                {API_18N.CUSTOMIZATION.CLIENT.BUTTON_FINISH}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
